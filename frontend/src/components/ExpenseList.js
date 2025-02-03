import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense} from "../redux/slices/expenseSlice";

const ExpenseList = () => {
    const expenses = useSelector(state => state.expenses);
    const dispatch = useDispatch();

    return (
        <div className="mt-6-white shadow-nd p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Expense List</h2>
            {expenses.length === 0 ? (
                <p className="text-gray-500">No Expenses added yet.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                     <tr className="bg-gray-200">
                         <th className="p-2">Title</th>
                         <th className="p-2">Amount</th>
                         <th className=" p-2">Category</th>
                         <th className="p-2">Date</th>
                         <th className="p-2">Action</th>
                     </tr>
                    </thead>
                    <tbody>
                    {expenses.map(expense => (
                        <tr key={expense.id} className="border-b">
                            <td className="p-2">{expense.title}</td>
                            <td className="p-2">{expense.amount}</td>
                            <td className="p-2">{expense.category}</td>
                            <td className="p-2">{expense.date}</td>
                            <td className="p-2">
                                <button className="bg-red-500 text-white px-2 py-1rounded-lg"
                                        onClick={() => dispatch(removeExpense(expense.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ExpenseList;