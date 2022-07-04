import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  //These are the event listeners that will update the current value
  const yearChangeHandler = (event) => {
    const year = event.target.value;
    props.onYearChange(year);  //Sending data to a higher level (Expenses.js)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
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