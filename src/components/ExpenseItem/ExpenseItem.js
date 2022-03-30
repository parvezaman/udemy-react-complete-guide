import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 2, 26);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = 215;

  // console.log(expenseDate);
  console.log(props.date.toLocaleString("en-US", { month: "long" }));

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  // const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const day = props.date.toLocaleString("en-US", { day: "numeric" });
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
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
