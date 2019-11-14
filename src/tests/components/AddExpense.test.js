import React from 'react';
import {shallow} from 'enzyme';
import expenses from './../fixtures/expenses';

import {AddExpenseComponent} from './../../components/AddExpenseComponent';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = {push: jest.fn() }
    wrapper = shallow(<AddExpenseComponent addExpense={addExpense} history={history}/>);
})

test('should render add expense page correctly', () => {
     expect(wrapper).toMatchSnapshot();
})

test('should handle on submit', () => {
     wrapper.find('ExpenseFormComponent').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
})