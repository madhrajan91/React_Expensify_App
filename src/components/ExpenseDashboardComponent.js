import React from 'react';
import ConnectedExpenseListComponent from './ExpenseListComponent';
import ExpenseListFiltersComponent from './ExpenseListFiltersComponent';


const ExpenseDashboardComponent = () => (
    <div>
        This is from my dashboard component
        <ExpenseListFiltersComponent />
        <ConnectedExpenseListComponent />
    </div>
)

export default ExpenseDashboardComponent;