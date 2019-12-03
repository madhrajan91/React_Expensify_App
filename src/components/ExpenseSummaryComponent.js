import React from 'react';
import {connect} from 'react-redux';
import getExpensesTotal from './../selectors/expense-total';
import selectFilteredExpenses from './../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
        <p>Viewing {props.expensesCount} expenses totalling to {numeral(props.totalAmount/100).format('$0,0.00')} </p>
    </div>
);

const mapStateToProps = (state) => {
    const filteredExpenses = selectFilteredExpenses(state.expenses, state.filters);
    return {
        expensesCount: filteredExpenses.length,
        totalAmount: getExpensesTotal(filteredExpenses)
    }
}

export default  connect(mapStateToProps)(ExpenseSummary);
