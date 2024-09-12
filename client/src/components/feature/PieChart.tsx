// src/components/feature/PieChart.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      label?: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth?: number;
    }[];
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <div className="w-full h-full">
      <Pie data={data} options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' as const,
          },
          title: {
            // display: true,
            // text: 'Ministry Distribution in Church',
          },
        },
      }} />
    </div>
  );
}

export default PieChart;
