// Mock data for the dashboard

export interface StatsData {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}

export interface ChartData {
  name: string;
  value: number;
  [key: string]: string | number;
}

export interface TableData {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  revenue: number;
  date: string;
}

export const statsData: StatsData[] = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: 12.5,
    trend: 'up',
    icon: 'dollar-sign',
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: 8.2,
    trend: 'up',
    icon: 'users',
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: -2.4,
    trend: 'down',
    icon: 'trending-up',
  },
  {
    title: 'Avg. Session',
    value: '4m 32s',
    change: 5.1,
    trend: 'up',
    icon: 'clock',
  },
];

export const revenueChartData: ChartData[] = [
  { name: 'Jan', value: 4000, revenue: 4000 },
  { name: 'Feb', value: 3000, revenue: 3000 },
  { name: 'Mar', value: 5000, revenue: 5000 },
  { name: 'Apr', value: 2780, revenue: 2780 },
  { name: 'May', value: 1890, revenue: 1890 },
  { name: 'Jun', value: 2390, revenue: 2390 },
  { name: 'Jul', value: 3490, revenue: 3490 },
  { name: 'Aug', value: 4200, revenue: 4200 },
  { name: 'Sep', value: 3800, revenue: 3800 },
  { name: 'Oct', value: 4300, revenue: 4300 },
  { name: 'Nov', value: 4100, revenue: 4100 },
  { name: 'Dec', value: 4500, revenue: 4500 },
];

export const userGrowthData: ChartData[] = [
  { name: 'Jan', users: 1200, newUsers: 200 },
  { name: 'Feb', users: 1900, newUsers: 300 },
  { name: 'Mar', users: 3000, newUsers: 500 },
  { name: 'Apr', users: 2780, newUsers: 400 },
  { name: 'May', users: 1890, newUsers: 250 },
  { name: 'Jun', users: 2390, newUsers: 350 },
];

export const categoryData: ChartData[] = [
  { name: 'Electronics', value: 35, sales: 12500 },
  { name: 'Clothing', value: 28, sales: 9800 },
  { name: 'Food', value: 20, sales: 7200 },
  { name: 'Books', value: 12, sales: 4200 },
  { name: 'Other', value: 5, sales: 1800 },
];

export const tableData: TableData[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'active',
    revenue: 12500,
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'active',
    revenue: 9800,
    date: '2024-01-14',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    status: 'pending',
    revenue: 7200,
    date: '2024-01-13',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice.williams@example.com',
    status: 'active',
    revenue: 15200,
    date: '2024-01-12',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    status: 'inactive',
    revenue: 5400,
    date: '2024-01-11',
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    status: 'active',
    revenue: 18900,
    date: '2024-01-10',
  },
  {
    id: '7',
    name: 'Edward Norton',
    email: 'edward.norton@example.com',
    status: 'pending',
    revenue: 6800,
    date: '2024-01-09',
  },
  {
    id: '8',
    name: 'Fiona Apple',
    email: 'fiona.apple@example.com',
    status: 'active',
    revenue: 11200,
    date: '2024-01-08',
  },
];

export const filterOptions = {
  status: ['all', 'active', 'inactive', 'pending'],
  dateRange: ['all', 'today', 'week', 'month', 'year'],
};

