import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "e1",
      amount: "3541",
      date: new Date(2022, 0, 6),
    },
    {
      title: "e2",
      amount: "465",
      date: new Date(2022, 1, 16),
    },
    {
      title: "e3",
      amount: "53",
      date: new Date(2022, 2, 6),
    },
    {
      title: "e4",
      amount: "54663",
      date: new Date(2022, 2, 15),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
