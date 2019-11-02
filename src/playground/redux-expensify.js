import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'


// ADD_EXPENSE
const addExpense = ({description='', note='',amount=0, createdAt=0} = {}) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

})


// REMOVE_EXPENSE
const removeExpense = ({id=-1} = {}) => ({
    type:'REMOVE_EXPENSE',
    id

})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type:"EDIT_EXPENSE",
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text='') => ({
    type:"SET_TEXT_FILTER",
    text
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type:"SORT_BY_AMOUNT"
})

// SORT_BY_DATE
const sortByDate = () => ({
    type:"SORT_BY_DATE"
})

// SET_START_DATE
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
})

// SET_END_DATE
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
})

// Expenses REducer
const expensesReducerDefaultState = []
const expensesReducer = (state= expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense); // don't use push since push adds to the original while concat returns a new object (Could   USE SPREAD instead)
            return [... state, action.expense]; // SPREAD
        case 'REMOVE_EXPENSE':
            const expenses = state.filter((expenseToRemove) => {
                return (expenseToRemove.id != action.id);
            })
            return expenses;
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }
            })
        default:
            return state;
    }
}

const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate:undefined

}
const filterReducer = (state=filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.date
            }
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
     const filteredExpenses = expenses.filter((expense) => {
        console.log(text)
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase()) ;

        return startDateMatch && endDateMatch && textMatch;
    })
        console.log(sortBy)
        return filteredExpenses.sort((a,b) => {
            if (sortBy === 'date') {
                return a.createdAt > b.createdAt?1:-1;
            }
            else {
                return a.amount > b.amount?1:-1;
            }
        })

    //return expenses;
}

const store = createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filterReducer
        })
);




store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense(
                            {   description:'Rent',
                                'amount': 100,
                                'createdAt': 1000
                            }
));

const expenseTwo = store.dispatch(addExpense(
                            {   description:'Coffee',
                                'amount': 20,
                                'createdAt':-1000
                            }
));

//store.dispatch(removeExpense({id:expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}))

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

const expenseThree = store.dispatch(addExpense(
    {   description:'Coffee',
        'amount': 10,
        'createdAt': 900
    }
));
store.dispatch(sortByAmount()); 


store.dispatch(sortByDate()); 


store.dispatch(setStartDate(-2000));
//store.dispatch(setStartDate());
store.dispatch(setEndDate(1000));




const demoState = {
    expenses:[{
        id: 'pdasxyz',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount:54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
}
// spread the object
console.log(
    {
        ... user,
        location: 'Boston',
        age: 28
    }
);