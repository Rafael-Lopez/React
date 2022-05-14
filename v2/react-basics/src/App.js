import { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2022, 5, 10),
    title: "Car Insurance",
    amount: 294.67,
  },
  {
    id: 'e2',
    date: new Date(2022, 5, 10),
    title: "Toilet Paper",
    amount: 13.5,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses( previousExpenses => [expense, ...previousExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
