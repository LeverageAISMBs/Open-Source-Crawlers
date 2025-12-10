// hooks/useLiveAgent.ts
import { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { createBlob, decode, decodeAudioData } from '../utils/audioUtils';

interface UseLiveAgentProps {
  systemInstruction: string;
}

export const useLiveAgent = ({ systemInstruction }: UseLiveAgentProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Refs for audio context and processing
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const sessionRef = useRef<any>(null); // LiveSession
  const nextStartTimeRef = useRef<number>(0);
  const audioSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Cleanup function
  const stop = useCallback(async () => {
    try {
      if (sessionRef.current) {
        // We can't explicitly close the session object in the SDK yet depending on version, 
        // but we can stop sending data.
        sessionRef.current = null;
      }
      
      // Stop microphone
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        mediaStreamRef.current = null;
      }

      // Stop processing
      if (processorRef.current && sourceRef.current) {
        sourceRef.current.disconnect();
        processorRef.current.disconnect();
        processorRef.current = null;
        sourceRef.current = null;
      }

      // Close contexts
      if (inputContextRef.current) {
        await inputContextRef.current.close();
        inputContextRef.current = null;
      }
      if (audioContextRef.current) {
        await audioContextRef.current.close();
        audioContextRef.current = null;
      }
      
      // Stop all playing audio
      audioSourcesRef.current.forEach(source => {
        try { source.stop(); } catch (e) {}
      });
      audioSourcesRef.current.clear();

      setIsActive(false);
      setIsSpeaking(false);
      nextStartTimeRef.current = 0;
    } catch (err) {
      console.error("Error stopping agent:", err);
    }
  }, []);

  const start = useCallback(async () => {
    setError(null);
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API Key not found");

      const ai = new GoogleGenAI({ apiKey });
      
      // 1. Setup Audio Input (Mic)
      // Input context needs 16kHz for Gemini
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      inputContextRef.current = inputCtx;
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      // 2. Setup Audio Output (Speakers)
      // Output context for playback (24kHz standard for Gemini response)
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;
      nextStartTimeRef.current = outputCtx.currentTime;

      // 3. Connect to Gemini Live
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            console.log('Gemini Live Connected');
            setIsActive(true);

            // Setup input processing only after connection
            const source = inputCtx.createMediaStreamSource(stream);
            const processor = inputCtx.createScriptProcessor(4096, 1, 1);
            
            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then(session => {
                if (sessionRef.current) { // Check if still active
                   session.sendRealtimeInput({ media: pcmBlob });
                }
              });
            };

            source.connect(processor);
            processor.connect(inputCtx.destination);
            
            sourceRef.current = source;
            processorRef.current = processor;
          },
          onmessage: async (message: LiveServerMessage) => {
             // Handle Audio Output
             const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
             if (base64Audio && audioContextRef.current) {
                setIsSpeaking(true);
                const ctx = audioContextRef.current;
                
                // Sync start time
                nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                
                try {
                  const audioBuffer = await decodeAudioData(
                    decode(base64Audio),
                    ctx,
                    24000,
                    1
                  );
                  
                  const source = ctx.createBufferSource();
                  source.buffer = audioBuffer;
                  source.connect(ctx.destination);
                  
                  source.addEventListener('ended', () => {
                    audioSourcesRef.current.delete(source);
                    if (audioSourcesRef.current.size === 0) {
                      setIsSpeaking(false);
                    }
                  });

                  source.start(nextStartTimeRef.current);
                  nextStartTimeRef.current += audioBuffer.duration;
                  audioSourcesRef.current.add(source);
                } catch (e) {
                  console.error("Error decoding audio", e);
                }
             }

             // Handle Interruption
             if (message.serverContent?.interrupted) {
                console.log("Interrupted");
                audioSourcesRef.current.forEach(source => source.stop());
                audioSourcesRef.current.clear();
                setIsSpeaking(false);
                if (audioContextRef.current) {
                   nextStartTimeRef.current = audioContextRef.current.currentTime;
                }
             }
          },
          onclose: () => {
            console.log("Session closed");
            stop();
          },
          onerror: (err) => {
            console.error("Session error:", err);
            setError("Connection error");
            stop();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          },
          systemInstruction: systemInstruction,
        }
      });

      sessionRef.current = sessionPromise;

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to start");
      stop();
    }
  }, [systemInstruction, stop]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return {
    isActive,
    isSpeaking,
    error,
    start,
    stop
  };
};
