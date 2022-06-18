import { useState } from "react";
import "./App.css";
import Expenses from "./components/ExpenseItem/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const InitalExpenses = [
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
function App() {
  const [expenses, setExpenses] = useState(InitalExpenses);

  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    // setExpenses([newExpense, ...expenses]); // this also works
    // but, remember the better way to update states with the help of function. which has previous states stored already
    setExpenses((previousExpenses) => {
      console.log(previousExpenses);
      return [newExpense, ...previousExpenses];
    });
  };
  return (
    <div className="expense-style">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
