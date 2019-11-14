import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardComponent from '../../components/ExpenseDashboardComponent';


test ('should render expenselist dashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardComponent/>);
    expect(wrapper).toMatchSnapshot()
})
