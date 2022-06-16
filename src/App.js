import "./App.css";
import Expenses from "./components/ExpenseItem/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: "3541",
      date: new Date(2022, 0, 6),
    },
    {
      title: "Toilet paper",
      amount: "465",
      date: new Date(2022, 1, 16),
    },
    {
      title: "House wash",
      amount: "53",
      date: new Date(2022, 2, 6),
    },
    {
      title: "Baking powder",
      amount: "54663",
      date: new Date(2022, 2, 15),
    },
  ];
  return (
    <div className="expense-style">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
