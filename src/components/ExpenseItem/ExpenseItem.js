import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 2, 26);
  const expenseTitle = "Car Insurance";
  const expensePrice = 215;

  // console.log(expenseDate);
  return (
    <div className="expense-item">
      <div className="expense-item__date">{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
