import React,{useState} from 'react';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card.js';
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from './ExpensesList';

function Expenses(props) {

    const [selectedYear,setSelectedYear] = useState('All');

    const selectedYearData = (selectedYearValue) =>{
      setSelectedYear(selectedYearValue);
    }

    const filteredArray = props.data.filter(exp => {
      return exp.date.getFullYear().toString() === selectedYear;
    });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectedYearData={selectedYearData}
      ></ExpensesFilter>
      {selectedYear === "All" ?<ExpensesChart expenses = {props.data} />:<ExpensesChart expenses = {filteredArray}/>}
      {selectedYear === "All" && <ExpensesList item = {props.data}/>}
      {selectedYear !== "All" && <ExpensesList item = {filteredArray}/>}
    </Card>
  );
}

export default Expenses;