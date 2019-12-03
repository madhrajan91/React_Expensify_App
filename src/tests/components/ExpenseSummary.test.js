import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummaryComponent';
import expenses from '../fixtures/expenses';

test ('should render expense summary with  from 0', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} totalAmount={10}/>);
    expect(wrapper).toMatchSnapshot()
})

test ('should render expense summary with  from multuople expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={3} totalAmount={4123}/>);
    expect(wrapper).toMatchSnapshot()
})