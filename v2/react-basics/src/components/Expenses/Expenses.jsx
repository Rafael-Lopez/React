import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = filteredYear => {
    setSelectedYear(filteredYear);
  };

  return (
    <div>
      <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
      <Card className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.title}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
