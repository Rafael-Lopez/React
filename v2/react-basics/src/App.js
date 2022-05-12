import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      date: new Date(2022, 5, 10),
      title: "Car Insurance",
      amount: 294.67
    },
    {
      date: new Date(2022, 5, 10),
      title: "Toilet Paper",
      amount: 13.50
    }
  ];

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
