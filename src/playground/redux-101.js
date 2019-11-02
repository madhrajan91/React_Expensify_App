import { createStore } from 'redux';

// destructuring an argument
const add = ({a,b}, c) => {
    return a + b + c;
}

console.log(add({a:2, b:3},5));

// Action generators - functions that return actions

const incrementCount = ({incrementBy=1} = {}) => {

    return {
        type: "INCREMENT",
        incrementBy
    };
}

const decrementCount = ({decrementBy=1} = {}) => {
    return {
        type:"DECREMENT",
        decrementBy
    };
}

const setCount = ({count=1} = {}) => {
    return {
        type: "SET",
        count
    };
    
}

const resetCount = () => {
    return {
        type: "RESET"
    };
    
}

// Reducers
// -- pure functions
// -- Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {                
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':
            return {
                
                count: state.count-action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
        
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})



// increment count and reset using Actions
// Actions {increment, decrement, reset}

// increment
store.dispatch(incrementCount({'incrementBy':52}))

// increment
store.dispatch(incrementCount())

// increment
store.dispatch(incrementCount())

store.dispatch(decrementCount());


// increment
store.dispatch(decrementCount({decrementBy:10}));


store.dispatch(resetCount());

store.dispatch(setCount({count:10}));