import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

//This is just a dumb/presentational component (it doesn't manage any state)
const ExpenseItem = (props) => {
  return (
      //This is JSX not just regular HTML (always needs a wrapper)
      <li>
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
              <h2>{props.title}</h2>
              <div className='expense-item__price'>${props.amount}</div>
          </div>
        </Card>
      </li>
    );
}

export default ExpenseItem;