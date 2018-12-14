import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import {firebase} from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

// test
// import './playground/promises' 

import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'

const store = configureStore()
const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        // if logined, direct the user to dashboard
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            // redirect the user to dashboard when sitting on login page
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
        // history.push('/dashboard')
    } else {
        store.dispatch(logout())
        // Bring to login page
        renderApp()
        history.push('/');
    }
}) 