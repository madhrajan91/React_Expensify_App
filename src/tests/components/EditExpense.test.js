import React from 'react';
import {shallow} from 'enzyme';
import expenses from './../fixtures/expenses';
import { EditExpenseComponent } from '../../components/EditExpenseComponent';


let editExpense, removeExpense, history, wrapper, match;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn()
    history = {push: jest.fn() }
    match = {
        params: {
            id: expenses[1].id
        }
    }
    wrapper = shallow(<EditExpenseComponent expense={expenses[1]} editExpense={editExpense} removeExpense={removeExpense} history={history} match={match}/>);

})

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle edit expense correctly', () => {
    wrapper.find('ExpenseFormComponent').prop('onSubmit')(expenses[1]);
    expect(wrapper).toMatchSnapshot();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
})

test('should handle delete expense correctly', () => {

    wrapper.find('button').at(0).simulate('click', {});
    expect(wrapper).toMatchSnapshot();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1]);
})