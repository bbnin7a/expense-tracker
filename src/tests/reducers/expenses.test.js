import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action ={
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense if id not found', () => {
  const action ={
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'New Rent',
      notes: 'New note',
    }
  }

  const state = expensesReducer(expenses, action)
  // expect(state).toEqual([ expenses[0], {...expenses[1], ...action.updates  }, expenses[2]])
  expect(state).toEqual(expect.arrayContaining([{...expenses[1], ...action.updates}]))
})

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'New Rent',
      note: 'New note',
    }
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Coffee',
      notes: 'Coffee day',
      amount: 8,
      createdAt: 10000
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expect.arrayContaining([...action.expense]))
})