import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

//component showing graph
function ChartLayout({ expensesData }) {
  const expenseDate = expensesData.map((expense) => expense.date);
  const expenseAmounts = expensesData.map((expense) => expense.amount);
  const expenseTitles = expensesData.map((expense) => expense.title);

  const chartData = {
    labels: expenseDate,
    datasets: [
      {
        label: "Amount (€)",
        data: expenseAmounts,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            const index = tooltipItems[0]?.dataIndex || 0;

            return expenseTitles[index] || "";
          },
        },
      },
    },
  };

  return (
    <div className="bg-indigo-50 rounded-xl p-5 md:mx-auto md:w-11/12 lg:h-4/6 lg:mx-0">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default ChartLayout;
