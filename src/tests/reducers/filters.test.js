import filtersReducer from './../../reducers/filters';
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should sort by to amount', () => {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should sort by to date', () => {

    const currentState = {
        text:'',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    
    }

    const state = filtersReducer(currentState, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('should set text', () => {
    const state = filtersReducer(undefined, {type:'SET_TEXT_FILTER', text:'bill'});
    expect(state.text).toBe('bill');
})

test('should set startDate', () => {
    const state = filtersReducer(undefined, {type:'SET_START_DATE', date:moment(0)});
    expect(state.startDate).toEqual(moment(0));
})

test('should set endDate', () => {
    const state = filtersReducer(undefined, {type:'SET_END_DATE', date:moment(0)});
    expect(state.endDate).toEqual(moment(0));
})

