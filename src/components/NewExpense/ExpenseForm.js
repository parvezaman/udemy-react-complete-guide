import React, { useState } from "react";
import "./ExpenseForm.css";
// import { useState } from "react";

const ExpenseForm = () => {
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
  console.log(enteredTitle, en  teredAmmount, enteredDate);
  //   console.log(userInput);
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={ammountChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
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
