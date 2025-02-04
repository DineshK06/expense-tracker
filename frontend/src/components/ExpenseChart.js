import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category.name] = (acc[expense.category.name] || 0) + parseFloat(expense.amount);
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                label: "Expense Amount",
                data: Object.values(categoryTotals),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-bold mb-3">Expense Summary</h2>
            {expenses.length === 0 ? (
                <p className="text-gray-500">No expenses to show.</p>
            ) : (
                <Bar data={chartData} />
            )}
        </div>
    );
};

export default ExpenseChart;
