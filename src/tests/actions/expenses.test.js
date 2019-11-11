import {addExpense, removeExpense, editExpense} from './../../actions/expenses';

test('should setup add action object with provided values', () => {
    const expenseData = {
        description:'Rent',
        amount:10000,
        createdAt:1000,
        note: 'november rent'
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        'type': 'ADD_EXPENSE', 
        'expense': {
            ...expenseData,
            id: expect.any(String)
        }
        });
})

test('should setup add action object with defaults', () => {
    const action = addExpense({});

    expect(action).toEqual({
        'type': 'ADD_EXPENSE', 
        'expense': {
            description: '',
            note:'',
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
        });
})


test('should setup remove expense action', () => {
    const action = removeExpense({id:123});
    expect(action).toEqual({'type': 'REMOVE_EXPENSE', 'id':123}); //cant use tobe
})

test('should setup edit expense action', () => {
    const action = editExpense(123, 
                               {note:'hello'});

    expect(action).toEqual({
                            'type': 'EDIT_EXPENSE', 
                            'id':123, 
                            "updates":{
                                        "note":"hello"
                                    }
                            }); //cant use tobe
})