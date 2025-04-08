import React from "react";
import { Card, Statistic, Table } from "antd";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  BoxPlotOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";
import {
  salesSummary,
  dailySalesData,
  topSellingProducts,
  categorySalesData,
  recentOrders,
} from "../../../assets/data/SalesOverview";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Colors and icons for summary
const summaryData = [
  {
    title: "Total Revenue",
    value: `$${salesSummary.totalRevenue}`,
    color: "#28a745",
    icon: <DollarCircleOutlined />,
  },
  {
    title: "Total Orders",
    value: salesSummary.totalOrders,
    color: "#007bff",
    icon: <ShoppingCartOutlined />,
  },
  {
    title: "Total Products Sold",
    value: salesSummary.totalProductsSold,
    color: "#fd7e14",
    icon: <BoxPlotOutlined />,
  },
  {
    title: "Avg Order Value",
    value: `$${salesSummary.avgOrderValue}`,
    color: "#6610f2",
    icon: <RiseOutlined />,
  },
  {
    title: "Refunds Processed",
    value: `$${salesSummary.refundsProcessed}`,
    color: "#dc3545",
    icon: <FallOutlined />,
  },
];

// Line Chart Data
const lineChartData = {
  labels: dailySalesData.map((item) => item.date),
  datasets: [
    {
      label: "Daily Sales ($)",
      data: dailySalesData.map((item) => item.sales),
      borderColor: "#007bff",
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      tension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: "#007bff",
    },
  ],
};

// Chart Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { display: true, position: "top" },
    tooltip: { enabled: true },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { display: false }, beginAtZero: true },
  },
};

const columns = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Units Sold",
    dataIndex: "unitsSold",
    key: "unitsSold",
  },
  {
    title: "Revenue",
    dataIndex: "revenue",
    key: "revenue",
  },
];
const column1 = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "key",
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "key",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "key",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "key",
  },
];

const categoryLineChartData = {
  labels: categorySalesData.map((item) => item.category),
  datasets: [
    {
      label: "Daily Sales ($)",
      data: categorySalesData.map((item) => item.sales),
      borderColor: "#007bff",
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      tension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: "#007bff",
    },
  ],
};

// Sales Overview Component
const SalesOverview = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Summary Cards */}
      <p style={{ textAlign: "center" }}>
        *** Welcome to your Sales Overview dashboard! Here, you can track your
        total revenue, orders, and product performance at a glance.***
      </p>
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2.2em",
        }}
      >
        {summaryData.map((item, index) => (
          <Card
            key={index}
            style={{
              width: 200,
              borderLeft: `5px solid ${item.color}`,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Statistic
              title={item.title}
              value={item.value}
              valueStyle={{ color: item.color }}
              prefix={item.icon}
            />
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          gap: "1em",
          margin: "auto",
          flexWrap: "wrap",
        }}
      >
        <Card
          title="Daily Sales Overview"
          style={{ width: "60%", marginTop: 20 }}
        >
          <Line data={lineChartData} options={chartOptions} />
        </Card>
        <Card title="Top Selling Products" style={{ marginTop: 20 }}>
          <Table
            dataSource={topSellingProducts}
            columns={columns}
            pagination={false}
          />
        </Card>
        <Card title="Category Sales" style={{ width: "55%", marginTop: 20 }}>
          <Line data={categoryLineChartData} options={chartOptions} />
        </Card>
        <Card title="Recent Orders" style={{ marginTop: 20 }}>
          <Table
            dataSource={recentOrders}
            columns={column1}
            pagination={false}
          />
        </Card>
      </div>
    </div>
  );
};

export default SalesOverview;
