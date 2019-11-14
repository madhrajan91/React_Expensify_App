import React from 'react';
import { shallow } from 'enzyme';

import {ExpenseListFilters} from './../../components/ExpenseListFiltersComponent';
import {filters, altFilters} from './../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach( () => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    
    wrapper = shallow(<ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />)
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});


test('should handle text change', () => {
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: 'gas'
        }
    });
    expect(wrapper).toMatchSnapshot();
    expect(setTextFilter).toHaveBeenLastCalledWith('gas');
})

 test('should sort by date', () => {
    wrapper.find('select').at(0).simulate('change', {
        target: {
            value: 'date'
        }
    });
    expect(sortByDate).toHaveBeenCalled();
 })

test('should sort by amount', () => {
    wrapper.find('select').at(0).simulate('change', {
        target: {
            value: 'amount'
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
 } )

// test('should handle date focus change')
test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altFilters.startDate, 
        endDate: altFilters.endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
})

test('should handle date focus changes', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
    expect(wrapper.state('calendarFocused')).toEqual('endDate');
})