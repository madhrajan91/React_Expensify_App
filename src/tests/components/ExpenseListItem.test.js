import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItemComponent from '../../components/ExpenseListItemComponent';
import expenses from '../fixtures/expenses';

test ('should render expenselist from expenses', () => {
    const wrapper = shallow(<ExpenseListItemComponent expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot()
})