import React, { useState } from "react";
import "./ExpenseForm.css";
// import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmmount, setEnteredAmmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   another way to manage all these three useStates by only one useState
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmmount: "",
    enteredDate: "",
  }); */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //for single useState

    /*  setUserInput({  // one way of handling multiple states in a single useState
        ...userInput, 
        enteredTitle: event.target.value });*/

    //   another and better way to handle multiple states
    /* setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    }); */
  };

  const ammountChangeHandle = (event) => {
    setEnteredAmmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  console.log(enteredTitle, enteredAmmount, enteredDate);
  //   console.log(userInput);
  const submitHandler = (event) => {
    console.log(event);
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      ammount: enteredAmmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="enter title of your cost"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="enter ammount (float allowed)"
            value={enteredAmmount}
            onChange={ammountChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            // placeholder="pick a date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
