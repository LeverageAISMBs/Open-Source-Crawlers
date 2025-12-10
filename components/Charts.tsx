// components/Charts.tsx
import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip as ReTooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ScatterChart, Scatter, ZAxis
} from 'recharts';
import { COLORS, LANGUAGE_DATA, RANKING_DATA, BUBBLE_DATA } from '../constants';

// Custom Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-xl rounded text-sm text-slate-700">
        <p className="font-bold mb-1">{data.name || label}</p>
        {data.value && <p>Value: {data.value}</p>}
        {data.x && <p>Complexity: {data.x}</p>}
        {data.y && <p>ROI: {data.y}</p>}
      </div>
    );
  }
  return null;
};

export const LanguageChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={LANGUAGE_DATA}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {LANGUAGE_DATA.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />
          ))}
        </Pie>
        <ReTooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const RankingChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={RANKING_DATA}
        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
        <XAxis type="number" hide />
        <YAxis 
          dataKey="name" 
          type="category" 
          width={100} 
          tick={{fontSize: 12, fill: '#64748B'}} 
        />
        <ReTooltip content={<CustomTooltip />} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
          {RANKING_DATA.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const BubbleChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
        <XAxis 
          type="number" 
          dataKey="x" 
          name="Complexity" 
          unit="" 
          domain={[0, 10]}
          label={{ value: 'Implementation Difficulty (1-10)', position: 'insideBottom', offset: -10, fill: '#64748B', fontSize: 12 }} 
        />
        <YAxis 
          type="number" 
          dataKey="y" 
          name="ROI" 
          unit="" 
          domain={[0, 12]}
          label={{ value: 'Business ROI Potential (1-10)', angle: -90, position: 'insideLeft', fill: '#64748B', fontSize: 12 }}
        />
        <ZAxis type="number" dataKey="z" range={[100, 1000]} />
        <ReTooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
        <Scatter name="Crawlers" data={BUBBLE_DATA}>
            {BUBBLE_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};
