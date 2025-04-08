export const salesSummary = {
  totalRevenue: 125000, // Total revenue in dollars
  totalOrders: 1820, // Total number of orders
  totalProductsSold: 7250, // Total products sold
  avgOrderValue: 68, // Average order value in dollars
  refundsProcessed: 2500, // Refund amount in dollars
  conversionRate: 3.5, // Percentage of visitors who made purchases
};

export const dailySalesData = [
  { date: "2024-03-01", sales: 3200 },
  { date: "2024-03-02", sales: 4100 },
  { date: "2024-03-03", sales: 3700 },
  { date: "2024-03-04", sales: 5200 },
  { date: "2024-03-05", sales: 5800 },
  { date: "2024-03-06", sales: 6000 },
  { date: "2024-03-07", sales: 7200 },
];

export const topSellingProducts = [
  { key: 1, productName: "Gaming Mouse", unitsSold: 550, revenue: 16500 },
  { key: 2, productName: "Smartphone", unitsSold: 420, revenue: 63000 },
  { key: 3, productName: "Wireless Earbuds", unitsSold: 380, revenue: 11400 },
  { key: 4, productName: "Mechanical Keyboard", unitsSold: 290, revenue: 8700 },
  { key: 5, productName: "Smart Watch", unitsSold: 275, revenue: 8250 },
];

export const categorySalesData = [
  { category: "Electronics", sales: 58000 },
  { category: "Wearables", sales: 22000 },
  { category: "Accessories", sales: 15000 },
  { category: "Home Appliances", sales: 30000 },
];

export const recentOrders = [
  {
    key: 1,
    orderId: "#ORD1001",
    customer: "David Johnson",
    amount: 150,
    status: "Completed",
  },
  {
    key: 2,
    orderId: "#ORD1002",
    customer: "Emma Brown",
    amount: 95,
    status: "Pending",
  },
  {
    key: 3,
    orderId: "#ORD1003",
    customer: "Michael Smith",
    amount: 220,
    status: "Completed",
  },
  {
    key: 4,
    orderId: "#ORD1004",
    customer: "Sophia Wilson",
    amount: 180,
    status: "Cancelled",
  },
  {
    key: 5,
    orderId: "#ORD1005",
    customer: "Olivia Taylor",
    amount: 120,
    status: "Completed",
  },
];

export const earningsBreakdown = [
  { key: 1, category: "Product Sales", amount: 22000, percentage: 88 },
  { key: 2, category: "Shipping Fees", amount: 1800, percentage: 7.2 },
  { key: 3, category: "Discounts Given", amount: -1200, percentage: -4.8 },
  { key: 4, category: "Refunds Processed", amount: -800, percentage: -3.2 },
  { key: 5, category: "Platform Fees", amount: -1800, percentage: -7.2 },
  { key: 6, category: "Net Earnings", amount: 17500, percentage: 70 },
];
