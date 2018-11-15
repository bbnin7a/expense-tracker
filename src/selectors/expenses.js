import moment from 'moment'
// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( expense => {
        // return an expense that fit the following requirement
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        // console.log(startDateMatch, endDateMatch, textMatch)
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // new expense come first
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            // large expense come first
            return a.amount < b.amount ? 1 : -1
        }
    })
}