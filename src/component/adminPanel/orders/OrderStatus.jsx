import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { orderStatusData } from "../../../assets/data/SalesData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);
const OrderStatus = () => {
  // Bar Chart
  const months = orderStatusData.map((data) => data.month);
  const pendingOrders = orderStatusData.map((data) => data.pendingOrders);
  const completedOrders = orderStatusData.map((data) => data.completedOrders);
  const canceledOrders = orderStatusData.map((data) => data.canceledOrders);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Pending Orders",
        data: pendingOrders,
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Completed Orders",
        data: completedOrders,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Canceled Orders",
        data: canceledOrders,
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Monthly Order Status",
        font: { size: 20, weight: "bold" },
        color: "#000",
        align: "start",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Orders",
          font: { size: 16, weight: "bold" },
          color: "#000",
        },
        ticks: {
          font: { size: 14 },
        },
        grid: { display: false },
      },
      x: {
        title: {
          display: true,
          text: "Months",
          font: { size: 16, weight: "bold" },
          color: "#000",
        },
        ticks: {
          font: { size: 14 },
        },
        grid: { display: false },
      },
    },
  };

  // Doughnut chart
  const totalPending = orderStatusData.reduce(
    (sum, item) => sum + item.pendingOrders,
    0
  );
  const totalCompleted = orderStatusData.reduce(
    (sum, item) => sum + item.completedOrders,
    0
  );
  const totalCanceled = orderStatusData.reduce(
    (sum, item) => sum + item.canceledOrders,
    0
  );

  const data = {
    labels: ["Pending Orders", "Completed Orders", "Canceled Orders"],
    datasets: [
      {
        data: [totalPending, totalCompleted, totalCanceled],
        backgroundColor: ["orange", "green", "red"],
        hoverBackgroundColor: ["#ffa500", "#008000", "#ff0000"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Status Distribution",
        font: { size: 20, weight: "bold" },
        color: "#000",
        align: "start",
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {" "}
      <div
        style={{
          width: "48%",
          background: "#fff",
          marginTop: "2em",
          padding: "1em",
          borderRadius: "10px",
          minHeight: "400px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Doughnut data={data} options={options} />
      </div>
      <div
        style={{
          width: "48%",
          background: "#fff",
          marginTop: "2em",
          padding: "1em",
          borderRadius: "10px",
          minHeight: "400px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default OrderStatus;
