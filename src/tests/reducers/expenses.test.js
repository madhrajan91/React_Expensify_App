import expensesReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);

})

test('should add expense', () => {
    const expense =  {   
        'id':5,
        'description':'loans ',
        'amount': 500000,
        'note': '',
        'createdAt':moment(0).add(1000,'days').valueOf()
    }
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense
    })
    expect(state).toEqual([...expenses, expense])
})

test('should remove expense valid id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    })
    expect(state).toEqual([expenses[0], expenses[2], expenses[3]])
})

test('should remove expense valid id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: -1
    })
    expect(state).toEqual(expenses)
})

test('should edit expense valid id', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: 'update'
        }
    })
    expect(state[1].note).toBe('update')
})

test('should edit expense valid id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note: 'update'
        }
    })
    expect(state).toEqual(expenses)
})