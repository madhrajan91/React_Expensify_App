import React from 'react';
import ConnectedExpenseListComponent from './ExpenseListComponent';


const ExpenseDashboardComponent = () => (
    <div>
        This is from my dashboard component
        <ConnectedExpenseListComponent />
    </div>
)

export default ExpenseDashboardComponent;