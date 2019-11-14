import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseListComponent';
import expenses from '../fixtures/expenses';

test ('should render expenselist from expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot()
})

test ('should render expenselist with empty expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot()
})