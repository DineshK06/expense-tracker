import React from 'react';
import  { Bar } from "react-chartjs-2";
import { useSelector } from 'react-redux';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = () => {
    const expenses = useSelector(state => state.expenses);

    //Group expenses by category
    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
        return acc;
    }, {});

    // Prepare Chart Data
    const chartData = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                label: 'Expenses Amount',
                data: Object.values(categoryTotals),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 01)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bg-whute p-4 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-bold mb-3">Expense Summary</h2>
            {expenses.length === 0 ? (
                <p className="text-gray-500">No Expenses added yet.</p>
            ) : (
                <Bar data={chartData} />
            )}
        </div>
    );
};

export default ExpenseChart;

