import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: any;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div className=" h-full">
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          
          plugins: {
            legend: {
              position: 'bottom' as const,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.dataset.label}: ${context.raw}`;
                },
              },
            },
          },
        }}
        style={{ height: '100%', width: '100%' }} // Ensure chart takes full container space
      />
    </div>
  );
}

export default BarChart;
