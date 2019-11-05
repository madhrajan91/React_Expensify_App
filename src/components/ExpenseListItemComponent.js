
import React from 'react';

const ExpenseListItemComponent = (props) => (
    <div>
        <p>{props.expense.description} {props.expense.amount} {props.expense.createdAt}</p>
    </div>
);

export default ExpenseListItemComponent;