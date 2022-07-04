import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    //This will get the data from the ExpenseForm
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //special variable to get all previous data 
            id: Math.random().toString() //adding a new value to this
        };
        props.onAddExpense(expenseData); //Lifting state up
        setEditing(false);
    };

    //Using state to control what's going to be shown after the button is clicked
    //isEditing is used to check which HTML elements will be returned
    const [isEditing, setEditing] = useState(false);

    const startEditingHandler = () => {
        setEditing(true);
    };

    const stopEditingHandler = () => {
        setEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};

export default NewExpense;