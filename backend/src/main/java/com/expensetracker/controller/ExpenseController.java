package com.expensetracker.controller;

import com.expensetracker.entity.Expense;
import com.expensetracker.service.ExpenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@RequiredArgsConstructor
public class ExpenseController {

    private final ExpenseService expenseService;;

    @PostMapping
    public Expense createExpense(@RequestParam String title,
                                 @RequestParam double amount,
                                 @RequestParam String date,
                                 @RequestParam Long categoryId) {
        return expenseService.createExpense(title, amount, date, categoryId);
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @GetMapping("/category/{categoryId}")
    public List<Expense> getExpensesByCategory(@PathVariable Long categoryId) {
        return expenseService.getExpensesByCategory(categoryId);
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(id);
    }
}
