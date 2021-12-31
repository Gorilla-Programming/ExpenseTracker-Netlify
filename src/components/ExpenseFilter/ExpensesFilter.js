import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterOptionHandler=(event)=>{
      props.onSelectedYearData(event.target.value)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        {props.selected === 'All' ? <label>No filter</label>:<label>Filter by Year {props.selected} </label>}
        <select value={props.selected} onChange = {filterOptionHandler}>
          <option value='All'>No Filter</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>        
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;