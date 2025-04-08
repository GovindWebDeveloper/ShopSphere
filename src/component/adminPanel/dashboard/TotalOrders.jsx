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

// Get the last two months for trend calculation
const lastMonth = salesData[salesData.length - 1]; // December
const prevMonth = salesData[salesData.length - 2]; // November

// Calculate the percentage change
const trendPercentage =
  ((lastMonth.orders - prevMonth.orders) / prevMonth.orders) * 100;

// Determine trend conditionally
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
const totalOrderOfTheYear = salesData.reduce(
  (total, value) => total + value.orders,
  0
);

const TotalOrders = () => {
  const data = {
    labels: salesData.map((entry) => entry.month), // Month labels
    datasets: [
      {
        label: `Total Orders${totalOrderOfTheYear}`,
        data: salesData.map((entry) => entry.orders), // Revenue data
        backgroundColor: "rgb(7, 155, 253)",
        borderColor: "rgba(26, 2, 133, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 3,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Monthly Orders",
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

export default TotalOrders;
