import {setTextFilter,sortByAmount, sortByDate, setStartDate, setEndDate} from './../../actions/filters';

import moment from 'moment';

test('Should generate setTextFilter object provided', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:'bill'
    })
})

test('Should generate setTextFilter object default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:''
    })
})

test('Should generate sortByAmount object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    })
})

test('Should generate sortByDate object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    })
})


test('Should generate setStartDate object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        date:moment(0)
    })
})

test('Should generate setEndDate object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        date:moment(0)
    })
})