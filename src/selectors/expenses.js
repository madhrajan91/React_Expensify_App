import moment from 'moment';

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    const filteredExpenses = expenses.filter((expense) => {
       //console.log(text)
       const createdAtMoment = moment(expense.createdAt)
       const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
       const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
       const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase()) ;

       return startDateMatch && endDateMatch && textMatch;
   })
       //console.log(sortBy)
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

export default getVisibleExpenses;