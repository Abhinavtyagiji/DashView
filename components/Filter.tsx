'use client';

import { useState } from 'react';
import { Filter as FilterIcon, X } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  status: string;
  dateRange: string;
  search: string;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    status: 'all',
    dateRange: 'all',
    search: '',
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      status: 'all',
      dateRange: 'all',
      search: '',
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters =
    filters.status !== 'all' ||
    filters.dateRange !== 'all' ||
    filters.search !== '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <FilterIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
        </div>

        <div className="flex-1 w-full lg:max-w-md">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center flex-wrap gap-2 lg:gap-4">
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>

          <select
            value={filters.dateRange}
            onChange={(e) => handleFilterChange('dateRange', e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

