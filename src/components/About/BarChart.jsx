import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
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
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const data = {
    labels: [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
    datasets: [
      {
        label: "FUNDS UNDER MANAGEMENT",
        data: [81, 157, 257, 301, 320, 421, 623, 760, 1100],
        backgroundColor: [
          "rgba(75,192,192,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(75,192,192,1)",
          "rgba(75,192,192,1)",
          "rgba(75,192,192,1)",
          "rgba(75,192,192,1)",
          "rgba(75,192,192,1)",
          "rgba(75,192,192,1)",
          "rgba(75,192,192,1)",
          "rgba(255, 159, 64,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      tooltip: {
        callbacks: {
          label: (value) => `Funds managed: $${value.parsed.y.toLocaleString()}M`,
        },
      },
      datalabels: {
        display: true,
        anchor: 'end',
        align: 'top',
        color: 'black',
        formatter: (value, context) => {
          return '$' + value.toLocaleString() + 'M';
        }
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};
