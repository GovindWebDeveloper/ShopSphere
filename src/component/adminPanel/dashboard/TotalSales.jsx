import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, 
} from "chart.js";
import { salesData } from "../../../assets/data/SalesData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler 
);

const totalSaleOfTheYear = salesData.reduce(
  (total, value) => total + value.totalSales,
  0
);

const TotalSales = () => {
  const data = {
    labels: salesData.map((e) => e.month),
    datasets: [
      {
        label: `Total Sales ($)${totalSaleOfTheYear}`,
        data: salesData.map((e) => e.totalSales),
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        pointBackgroundColor: "white",
        pointBorderColor: "grey",
        pointRadius: 5,
        pointHoverRadius: 6,
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Monthly Sales",
        font: { size: 20, weight: "bold" },
        color: "#000",
        align: "start",
      },
    },
    scales: {
      y: {
        ticks: {
          font: { size: 14 },
          color: "#333",
        },
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Sales ($)",
          font: { size: 16, weight: "bold" },
          color: "black",
        },
        grid: { display: false },
      },
      x: {
        ticks: {
          font: { size: 14 },
          color: "#333",
        },
        title: {
          display: true,
          text: "Months",
          font: { size: 16, weight: "bold" },
          color: "black",
        },
        grid: { display: false },
      },
    },
  };

  return (
    <div
      style={{
        width: "90%",
        height: "400px",
        margin: "auto",
        backgroundColor: "#fff",
        padding: "1.5em",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default TotalSales;
