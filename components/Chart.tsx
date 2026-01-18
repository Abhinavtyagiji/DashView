'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartData } from '@/data/mockData';
import { useTheme } from '@/contexts/ThemeContext';

interface ChartProps {
  data: ChartData[];
  type: 'line' | 'bar' | 'area' | 'pie';
  title: string;
  dataKey?: string;
  dataKeys?: string[];
  colors?: string[];
}

const defaultColors = [
  '#0ea5e9',
  '#8b5cf6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#ec4899',
];

export default function Chart({
  data,
  type,
  title,
  dataKey = 'value',
  dataKeys,
  colors = defaultColors,
}: ChartProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const tooltipStyle = {
    backgroundColor: isDark ? 'rgb(31, 41, 55)' : 'rgb(255, 255, 255)',
    border: isDark ? '1px solid rgb(55, 65, 81)' : '1px solid rgb(229, 231, 235)',
    borderRadius: '8px',
    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
            <XAxis dataKey="name" stroke="#6b7280" className="dark:stroke-gray-400" />
            <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} />
            {dataKeys ? (
              dataKeys.map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              ))
            ) : (
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={colors[0]}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            )}
          </LineChart>
        );

      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
            <XAxis dataKey="name" stroke="#6b7280" className="dark:stroke-gray-400" />
            <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} />
            {dataKeys ? (
              dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                  radius={[8, 8, 0, 0]}
                />
              ))
            ) : (
              <Bar dataKey={dataKey} fill={colors[0]} radius={[8, 8, 0, 0]} />
            )}
          </BarChart>
        );

      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
            <XAxis dataKey="name" stroke="#6b7280" className="dark:stroke-gray-400" />
            <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} />
            {dataKeys ? (
              dataKeys.map((key, index) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                  fill={colors[index % colors.length]}
                  fillOpacity={0.6}
                />
              ))
            ) : (
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={colors[0]}
                fill={colors[0]}
                fillOpacity={0.6}
              />
            )}
          </AreaChart>
        );

      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey={dataKey}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgb(255, 255, 255)',
                border: '1px solid rgb(229, 231, 235)',
                borderRadius: '8px',
              }}
              wrapperClassName="dark:bg-gray-800 dark:border-gray-700"
            />
          </PieChart>
        );

      default:
        return <div />;
    }
  };

  const chart = renderChart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        {chart}
      </ResponsiveContainer>
    </div>
  );
}

