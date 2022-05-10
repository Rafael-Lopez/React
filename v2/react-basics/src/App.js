import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={new Date(2022, 5, 10)}
        title={"Car Insurance"}
        amount={294.67}
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2022, 5, 10)}
        title={"Toilet Paper"}
        amount={13.50}
      ></ExpenseItem>
    </div>
  );
}

export default App;
