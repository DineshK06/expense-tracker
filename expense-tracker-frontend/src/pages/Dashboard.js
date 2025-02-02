import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl fond-bold mb-4">Expense Dashboard</h1>
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
};

export default Dashboard;