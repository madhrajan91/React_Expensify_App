import React from 'react';
import ConnectedExpenseListComponent from './ExpenseListComponent';
import ExpenseListFiltersComponent from './ExpenseListFiltersComponent';
import ExpenseSummaryComponent from './ExpenseSummaryComponent';


const ExpenseDashboardComponent = () => (
    <div>
        This is from my dashboard component
        <ExpenseListFiltersComponent />
        <ConnectedExpenseListComponent />
        <ExpenseSummaryComponent />
    </div>
)

export default ExpenseDashboardComponent;