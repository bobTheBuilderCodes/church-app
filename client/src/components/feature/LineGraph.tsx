import React from "react";
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
} from "chart.js";

// Register components required for the line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  chartData: any;
  chartOptions: any;
}

const LineChart: React.FC<LineChartProps> = ({ chartData, chartOptions }) => {
  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;
