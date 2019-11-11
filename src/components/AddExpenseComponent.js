import React from 'react';
import {connect} from 'react-redux'

import ExpenseFormComponent from './ExpenseFormComponent'
import {addExpense} from '../actions/expenses'

const AddExpenseComponent = (props) => (
    <div>
        Add expense
        <ExpenseFormComponent
         onSubmit = {(expense) => {

            console.log(expense)
            props.dispatch(addExpense(expense));
            props.history.push('/')
         }} />
    </div>
)


export default connect()(AddExpenseComponent);