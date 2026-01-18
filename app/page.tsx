'use client';

import { useState, useMemo } from 'react';
import StatsCard from '@/components/StatsCard';
import Chart from '@/components/Chart';
import DataTable from '@/components/DataTable';
import Filter, { FilterState } from '@/components/Filter';
import ThemeToggle from '@/components/ThemeToggle';
import {
  statsData,
  revenueChartData,
  userGrowthData,
  categoryData,
  tableData,
} from '@/data/mockData';

export default function Dashboard() {
  const [filters, setFilters] = useState<FilterState>({
    status: 'all',
    dateRange: 'all',
    search: '',
  });

  const filteredTableData = useMemo(() => {
    let filtered = [...tableData];

    // Filter by status
    if (filters.status !== 'all') {
      filtered = filtered.filter((item) => item.status === filters.status);
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.email.toLowerCase().includes(searchLower)
      );
    }

    // Filter by date range (simplified - in real app would filter by actual dates)
    if (filters.dateRange !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (filters.dateRange) {
        case 'today':
          filterDate.setHours(0, 0, 0, 0);
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
        case 'year':
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
      }

      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= filterDate;
      });
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">DashView</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Analytics Dashboard</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} data={stat} />
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Chart
            data={revenueChartData}
            type="area"
            title="Monthly Revenue"
            dataKey="revenue"
          />
          <Chart
            data={userGrowthData}
            type="line"
            title="User Growth"
            dataKeys={['users', 'newUsers']}
          />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Chart
            data={revenueChartData}
            type="bar"
            title="Revenue by Month"
            dataKey="revenue"
          />
          <Chart
            data={categoryData}
            type="pie"
            title="Sales by Category"
            dataKey="value"
          />
        </div>

        {/* Filters and Table */}
        <Filter onFilterChange={setFilters} />
        <DataTable data={filteredTableData} />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © 2024 DashView. Built with Next.js
          </p>
          <p className="text-center text-gray-500 dark:text-gray-500 text-sm mt-2">
            Made by Abhinav Tyagi
          </p>
        </div>
      </footer>
    </div>
  );
}

