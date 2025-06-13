"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface MonthlyRevenueChartProps {
  revenueData: number[];
}

const RevinueChart: React.FC<MonthlyRevenueChartProps> = ({ revenueData }) => {
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue ($)",
        data: revenueData,
        backgroundColor: "#3B82F6",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl lg:m-6 h-[400px] bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Monthly Revenue Overview
      </h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default RevinueChart;
