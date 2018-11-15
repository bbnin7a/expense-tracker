import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'


const store = configureStore()

// subscribe the state changes from the store
// store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

store.dispatch(addExpense({ description: 'Water bill', amount: 1200, createdAt: 2000}))
store.dispatch(addExpense({ description: 'Gas bill', amount: 900, createdAt: 9000}))
store.dispatch(addExpense({ description: 'Rent', amount: 8200, createdAt: 19834}))
// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)


const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
