import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Coke",
    amount: 4.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Dress", amount: 49.49, date: new Date(2021, 8, 12) },
  {
    id: "e3",
    title: "Rice",
    amount: 14.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Vegetables",
    amount: 23.34,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (expenseData) => {
    setExpenses((preExpense) => {
      return [expenseData, ...preExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
