import moment from 'moment'
import filtersReducer from '../../reducers/filters' 

test('should setup default filter value', () => {
  const state = filtersReducer(undefined, {
    type: '@@INIT'
  })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
}) 

// SORT_BY_AMOUNT, SORT_BY_DATE
test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'Water'}
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(action.text)
})

test('should set startDate filter', () => {
  const startDate = moment()
  const action = { type: 'SET_START_DATE', startDate }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toBe(action.startDate)
})

test('should set endDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  }
  const action = { type: 'SET_END_DATE', endDate: 8912312370 }
  const state = filtersReducer(currentState, action)
  expect(state.endDate).toBe(action.endDate)
})