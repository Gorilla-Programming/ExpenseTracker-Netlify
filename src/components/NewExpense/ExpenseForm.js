import React, {useState} from "react";

import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const titleHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const dateHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onSetStateForIsEditing();
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} required="True"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateHandler} required="True"/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountHandler} required="True"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick = {props.onSetStateForIsEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
