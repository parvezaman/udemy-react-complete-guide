import "./App.css";
import Expenses from "./components/ExpenseItem/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "3541",
      date: new Date(2022, 0, 6),
    },
    {
      id: "e2",
      title: "Toilet paper",
      amount: "465",
      date: new Date(2022, 1, 16),
    },
    {
      id: "e3",
      title: "House wash",
      amount: "53",
      date: new Date(2022, 2, 6),
    },
    {
      id: "e4",
      title: "Baking powder",
      amount: "54663",
      date: new Date(2022, 2, 15),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };
  return (
    <div className="expense-style">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
