import React from 'react'
import {connect} from 'react-redux';

import selectFilteredExpenses from './../selectors/expenses';

import ExpenseListItemComponent from './ExpenseListItemComponent';

// export for testing (you don't want to test the connector)
export const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        {
            props.expenses.length === 0 ? (<p>No Expenses</p>):
            (props.expenses.map((expense) => (
                <ExpenseListItemComponent key={expense.id} expense={expense} />
            )))
        }


        {props.expenses.length}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses:selectFilteredExpenses(state.expenses, state.filters)

    }
}
export default  connect(mapStateToProps)(ExpenseList);


// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses:state.expenses
//     }
// })(ExpenseList);

// export default ConnectedExpenseList;