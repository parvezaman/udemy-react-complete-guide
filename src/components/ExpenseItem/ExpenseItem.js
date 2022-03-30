import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 2, 26);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = 215;

  // console.log(expenseDate);
  console.log(props.date.toLocaleString("en-US", { month: "long" }));

  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <div className="expense-item__title">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
