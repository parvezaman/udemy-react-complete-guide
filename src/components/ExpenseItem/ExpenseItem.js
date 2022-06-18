import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 2, 26);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = 215;

  // console.log(expenseDate);
  /* 
  const [title, setTitle] = useState(props.title);
  console.log(useState(props.title));
  console.log(props.date.toLocaleString("en-US", { month: "long" }));

  const clickHandler = () => {
    // console.log("clicked from the function");
    setTitle("updated!");
    console.log(title);
  };
 */
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <div className="expense-item__title">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
