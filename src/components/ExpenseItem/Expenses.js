import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  console.log(props.items);
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /*   let expensesContent = <p className="no-content-flag">No items to show !!!</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } */
  // line 22-30 are moved into ExpenseList.js file
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* no filter grab all data */}
      {/* {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

      {/* after applying filter */}
      {/* {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

      {/* Now lets say we want to show a message if we dont have any data for the filtered year */}
      {/* {filteredExpenses.length === 0 ? (
        <p className="no-content-flag">No items to show !!!</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* the same thing we can do using && operator (line: 46-57)*/}
      {/* {filteredExpenses.length === 0 && (
        <p className="no-content-flag">No items to show !!!</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
 */}
      {/* the same thing we can do using && operator (line: 46-57) and pretty neat way by declaring variable before return*/}
      {/* {expensesContent} remember? we moved them into ExpenseList.js */}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
