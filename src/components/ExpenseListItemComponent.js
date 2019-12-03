
import React from 'react';


import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItemComponent = (props) => (
    <div>
        <p><Link to={`/edit/${props.expense.id}`}>{props.expense.description}</Link> </p>
        <p>
            {numeral(props.expense.amount/100).format('$0,0.00')} 
            {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
        </p>
        
        </div>
);

export default ExpenseListItemComponent;