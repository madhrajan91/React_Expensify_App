
import React from 'react';





import {Link} from 'react-router-dom';

const ExpenseListItemComponent = (props) => (
    <div>
        <p><Link to={`/edit/${props.expense.id}`}>{props.expense.description}</Link> {props.expense.amount} {props.expense.createdAt}</p>
        
        </div>
);

export default ExpenseListItemComponent;