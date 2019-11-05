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

export default getVisibleExpenses;