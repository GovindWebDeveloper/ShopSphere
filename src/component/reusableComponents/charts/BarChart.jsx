import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({
  labels = [],
  dataSource = [],
  labelItem = "Data",
  title = "Bar Chart",
  xAxisLabel = "X-Axis",
  yAxisLabel = "Y-Axis",
  backgroundColor = "rgb(7, 155, 253)",
  borderColor = "rgba(26, 2, 133, 0.2)",
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: labelItem,
        data: dataSource,
        backgroundColor,
        borderColor,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: title,
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
          text: yAxisLabel,
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
          text: xAxisLabel,
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

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "500px",
        backgroundColor: "#fff",
        margin: "auto",
        padding: "2em",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "2em",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
