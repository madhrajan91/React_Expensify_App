import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Connect } from 'react-redux';


import AppRouter from './routers/AppRouter'

import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import configureStore from './store/configureStore'


import './styles/style.scss'
import 'normalize-css/normalize.css'

const store = configureStore();
console.log(store.getState())




store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


const expenseOne = store.dispatch(addExpense(
    {   description:'Water bill',
        'amount': 100,
        'createdAt': 1000
    }
));

const expenseTwo = store.dispatch(addExpense(
    {   description:'Gas bill',
        'amount': 20,
        'createdAt':5000
    }
));

const expenseThree = store.dispatch(addExpense(
    {   description:'insurance bill',
        'amount': 40,
        'createdAt':7000
    }
));

store.dispatch(setTextFilter('rent'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)

const jsx = (
    <Provider store={store}>
         <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,  document.getElementById('app'))


