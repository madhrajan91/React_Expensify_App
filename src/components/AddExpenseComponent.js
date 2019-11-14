import React from 'react';
import {connect} from 'react-redux'

import ExpenseFormComponent from './ExpenseFormComponent'
import {addExpense} from '../actions/expenses'

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    };
}

export class AddExpenseComponent extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/')
    }
    render() {
        return (
             <div>
                Add expense
                <ExpenseFormComponent
                    onSubmit = {this.onSubmit}
                />
            </div>
        )
    }
}
/*
const AddExpenseComponent = (props) => (
    <div>
        Add expense
        <ExpenseFormComponent
         onSubmit = {(expense) => {

            console.log(expense)
            props.onSubmit(expense);
            //props.dispatch(addExpense(expense));
            props.history.push('/')
         }} />
    </div>
)
*/

export default connect(undefined, mapDispatchToProps)(AddExpenseComponent);