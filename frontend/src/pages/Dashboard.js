import React, { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";
import API from "../api/api";

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await API.get("/expenses");
            setExpenses(response.data);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    const addExpense = async (expenseData) => {
        try {
            console.log("Expense data being sent:", expenseData);
            const token = localStorage.getItem("token"); // Example: If stored in localStorage

            if (!token) {
                console.error("No token found. You must log in to add expenses.");
                return;
            }

            const response = await API.post("/expenses", null, {
                params: {
                    title: expenseData.title,
                    amount: expenseData.amount,
                    date: expenseData.date,
                    categoryId: expenseData.categoryId,
                }
            });
            console.log("Expense data being sent:", expenseData);
            setExpenses((prevExpenses) => [...prevExpenses, response.data]);
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    const deleteExpense = async (id) => {
        try {
            await API.delete(`/expenses/${id}`);
            setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
        } catch (error) {
            console.error("Error deleting expense:", error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Expense Dashboard</h1>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
            <ExpenseChart expenses={expenses} />
        </div>
    );
};

export default Dashboard;
