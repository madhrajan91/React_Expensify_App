import getExpensesTotal from '../../selectors/expense-total';
import moment from 'moment';
import expenses from '../fixtures/expenses'

test ('should return 0 for no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toEqual(0)

})

test ('should return amount for one expense', () => {
    
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toEqual(expenses[0].amount)

})

test ('should return sum for list expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(660)
    
})

