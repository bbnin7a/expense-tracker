import { createStore } from 'redux'

// Action generators - fucntions that return action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: "SET",
    count
})

const resetCount = () => ({
    type: "RESET"
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state of action
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
             return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state
    }
}

const store = createStore(countReducer)

// get the store whenever the state is changed overtime
store.subscribe(() => {
    console.log(store.getState())
})

// to unscribe 
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState())
// })


// getState to fetch the current state

// Action creator,, temporarily no payload yet...
// ACTION OBJECT that will get sent to the store

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// })

// the subscribe() will only be called once.
// unsubscribe()

// store.dispatch({
//     type: "INCREMENT"
// })

// By making use of calling action function instead of simple action object, 
// 1. reuse the function,
// 2. easy to check the type with proper error message in the console

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 999 }))
