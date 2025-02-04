import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
    const [expense, setExpense] = useState({ title: "", amount: "", date: "", categoryId: "" });

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!expense.title || !expense.amount || !expense.date || !expense.categoryId) return;
        const expenseData = {
            title: expense.title,
            amount: parseFloat(expense.amount),
            date: expense.date,
            categoryId: parseInt(expense.categoryId)
        };
        addExpense(expenseData);
        setExpense({ title: "", amount: "", date: "", categoryId: "" });
    };

    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={expense.title} onChange={handleChange} className="w-full p-2 border rounded-lg mb-2" required />
                <input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} className="w-full p-2 border rounded-lg mb-2" required />
                <input type="date" name="date" value={expense.date} onChange={handleChange} className="w-full p-2 border rounded-lg mb-2" required />
                <input type="number" name="categoryId" placeholder="Category ID" value={expense.categoryId} onChange={handleChange} className="w-full p-2 border rounded-lg mb-2" required />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
