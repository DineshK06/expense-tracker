import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/slices/expenseSlice.js';

const ExpenseForm = () => {
    const dispatch = useDispatch();
    const [expense, setExpense] = useState({
        title: '',
        amount: 0,
        category: '',
        date: ""
    });

    const handleChange = (e) => {
        setExpense({...expense, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addExpense({ ...expense, id: Date.now() }));
        setExpense({
            title: '',
            amount: 0,
            category: '',
            date: ""
        });
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title"
                       value={expense.title} onChange={handleChange}
                       className="w-full p-2 mb-2 border rounded-lg" placeholder="Expense Title" required />
                <input type="number" name="amount"
                       value={expense.amount} onChange={handleChange}
                       className="w-full p-2 mb-2 border rounded-lg" placeholder="Expense Amount" required />
                <input type="text" name="category"
                       value={expense.category} onChange={handleChange}
                       className="w-full p-2 mb-2 border rounded-lg" placeholder="Expense Category" required />
                <input type="date" name="date"
                       value={expense.date} onChange={handleChange}
                       className="w-full p-2 mb-2 border rounded-lg" required />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;