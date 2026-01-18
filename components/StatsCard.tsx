'use client';

import { TrendingUp, TrendingDown, DollarSign, Users, Clock } from 'lucide-react';
import { StatsData } from '@/data/mockData';

interface StatsCardProps {
  data: StatsData;
}

const iconMap = {
  'dollar-sign': DollarSign,
  'users': Users,
  'trending-up': TrendingUp,
  'clock': Clock,
};

export default function StatsCard({ data }: StatsCardProps) {
  const Icon = iconMap[data.icon as keyof typeof iconMap] || DollarSign;
  const isPositive = data.trend === 'up';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{data.title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{data.value}</p>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${
                isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}
            >
              {Math.abs(data.change)}%
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${
          isPositive ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
        }`}>
          <Icon className={`w-6 h-6 ${
            isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`} />
        </div>
      </div>
    </div>
  );
}

