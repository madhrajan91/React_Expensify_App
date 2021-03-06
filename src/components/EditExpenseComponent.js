import React from 'react';

import {connect} from 'react-redux';

import ExpenseFormComponent from './ExpenseFormComponent';
import {editExpense} from '../actions/expenses'
import {removeExpense} from './../actions/expenses';

export class EditExpenseComponent extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.match.params.id, expense);
        this.props.history.push('/')
    }
    onClick = (e) => {
        this.props.removeExpense(this.props.expense);
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                Edit  with id of {this.props.match.params.id}
                <ExpenseFormComponent onSubmit={this.onSubmit}
                    expense={this.props.expense}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        )
    }
}

// const EditExpenseComponent = (props) => {
//     console.log(props);
//     // query strings 
//     // hash
//     console.log(props.location.search);
//     console.log(props.location.hash);
//     return (
//         <div>
//             Edit  with id of {props.match.params.id}
//             <ExpenseFormComponent onSubmit={(expense)=> {
//                 console.log(expense.id);
    
//                 props.dispatch(editExpense(props.match.params.id, expense));
//                 props.history.push('/')
//             }}
//             expense={props.expense}
//             />
//             <button onClick= {(e) => {
//                 props.dispatch(removeExpense(props.expense));
//                 console.log('removed');
//                 props.history.push('/')
//             }}>Remove</button>
//         </div>
//     )
// }

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (expense) => dispatch(removeExpense(expense))
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            if (expense.id === props.match.params.id){
                return true;
            }
            else {
                return false;
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseComponent);