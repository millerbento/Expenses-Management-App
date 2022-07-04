import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    //Using stage to store the data
    const [enteredYear, setEnteredYear] = useState('2021'); //default value to be used on ExpensesFilter selected={enteredYear}

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === enteredYear;
    });

    const YearChangeHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
        console.log('In Expenses.js');
        console.log(selectedYear);        
        };

    return (
        // JSX (always needs a wrapper)
        <Card className="expenses">
            <ExpensesFilter 
                selected={enteredYear} 
                onYearChange={YearChangeHandler} 
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>                     
        </Card>
    );
}

export default Expenses;