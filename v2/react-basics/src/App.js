import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      date: new Date(2022, 5, 10),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      date: new Date(2022, 5, 10),
      title: "Toilet Paper",
      amount: 13.5,
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
