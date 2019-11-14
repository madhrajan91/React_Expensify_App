import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from './../../components/ExpenseFormComponent';
import expenses from './../fixtures/expenses';

import moment from 'moment';

test ('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
})

test ('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot()
})

test ('should render error for invalid form submit', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test ('should set description on input change', () => {
    const val='description';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
       target : {
           value: val
       }
    });
    expect(wrapper.state('description')).toBe(val);
    expect(wrapper).toMatchSnapshot();
})

test ('should set note on textarea change', () => {
    const val='gym membership';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').at(0).simulate('change', {
       target : {
           value: val
       }
    });
    expect(wrapper.state('note')).toBe(val);
    expect(wrapper).toMatchSnapshot();
})

test ('should set amount on valid input change', () => {
    const val='23.50';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
       target : {
           value: val
       }
    });
    expect(wrapper.state('amount')).toBe(val);
    expect(wrapper).toMatchSnapshot();
})

test ('should set amount on invalid input change', () => {
    const val='12.122';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
       target : {
           value: val
       }
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
})

test ('should call onSubmit prop for valid for submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBe(0);
    // expect(onSubmitSpy).toHaveBeenCalled();

    // onSubmitSpy();
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    });
})

test ('should set new data on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);

    expect(wrapper.state('createdAt')).toEqual(now)
})

test ('should set calendarFocused on Focus', () => {

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});

    expect(wrapper.state('calendarFocused')).toEqual(true)
})