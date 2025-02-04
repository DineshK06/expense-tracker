import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const fetchExpensesAsync = createAsyncThunk("expenses/fetchExpenses", async () => {
    try {
        const response = await API.get("/expenses");
        return response.data;
    } catch (error) {
        console.error("Error fetching expenses:", error);
        throw error;
    }
});

const expenseSlice = createSlice({
    name: "expenses",
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
            state.push(action.payload);
        },
        removeExpense: (state, action) => {
            return state.filter((expense) => expense.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchExpensesAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;