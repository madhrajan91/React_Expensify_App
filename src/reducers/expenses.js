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

export default expensesReducer;