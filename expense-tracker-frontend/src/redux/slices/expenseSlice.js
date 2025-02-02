import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
            state.push(action.payload);
        },
        removeExpense: (state, action) => {
            return state.filter(expense => expense.id !== action.payload);
        },
    },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;