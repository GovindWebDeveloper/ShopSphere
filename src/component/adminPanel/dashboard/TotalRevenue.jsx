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

const lastMonth = salesData[salesData.length - 1];
const prevMonth = salesData[salesData.length - 2];

const trendPercentage =
  ((lastMonth.revenue - prevMonth.revenue) / prevMonth.revenue) * 100;

let trendMessage;
let trendColor;

if (trendPercentage > 0) {
  trendMessage = `📈(+${trendPercentage.toFixed(2)}%)`;
  trendColor = "green";
} else if (trendPercentage < 0) {
  trendMessage = `📉(${trendPercentage.toFixed(2)}%)`;
  trendColor = "red";
} else {
  trendMessage = "➡️ No Change in Sales";
  trendColor = "gray";
}

// Calculate total revenue of the year
const totalRevenueOfTheYear = salesData.reduce(
  (total, value) => total + value.revenue,
  0
);

const TotalRevenue = () => {
  const data = {
    labels: salesData.map((entry) => entry.month),
    datasets: [
      {
        label: `Revenue $ ${totalRevenueOfTheYear} `,
        data: salesData.map((entry) => entry.revenue),
        backgroundColor: "rgb(7, 155, 253)",
        borderColor: "rgba(26, 2, 133, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 1,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Monthly Sales Revenue",
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
          text: "Revenue ($)",
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
      <h3 style={{ color: trendColor, float: "right" }}>{trendMessage}</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TotalRevenue;
