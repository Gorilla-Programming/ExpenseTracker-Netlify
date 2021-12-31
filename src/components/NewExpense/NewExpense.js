import React, {useState} from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {

    const saveExpenseDataHandler = (expenseData) =>{
        props.onAddExpense(expenseData);
    }

    const [stateForIsEditing ,setStateForIsEditing] = useState(false);

    const changeStateForIsEditing = () => {
      if (stateForIsEditing === true){
        setStateForIsEditing(false)
      }
      else{
        setStateForIsEditing(true)
      }
    }

  return (
  <div className="new-expense">
        {!stateForIsEditing && <button onClick = {changeStateForIsEditing}>NEW EXPENSE</button>}
        {stateForIsEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onSetStateForIsEditing = {changeStateForIsEditing}/>}
  </div>);
}

export default NewExpense;
