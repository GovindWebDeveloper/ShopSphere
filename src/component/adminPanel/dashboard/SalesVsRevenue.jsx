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
import { salesData } from "../../../assets/data/SalesData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: salesData.map((e) => e.month),
  datasets: [
    {
      label: "Total Sales ($)",
      data: salesData.map((e) => e.totalSales),
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
    },
    {
      label: "Revenue",
      data: salesData.map((e) => e.revenue),
      backgroundColor: "rgba(255, 205, 86, 0.6)",
      borderColor: "rgb(255, 205, 86)",
      borderWidth: 1,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
  devicePixelRatio: 3,
  plugins: {
    legend: { display: true },
    title: {
      display: true,
      text: "Sales VS Revenue",
      font: { size: 20, weight: "bold" },
      color: "#000",
      align: "start",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
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

const SalesVsRevenue = () => {
  return (
    <div
      style={{
        width: "90%",
        maxHeight: "500px",
        backgroundColor: "#fff",
        margin: "auto",
        padding: "2em",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesVsRevenue;
