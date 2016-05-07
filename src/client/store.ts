import { createStore, combineReducers } from 'redux'

import { listReducer } from "../reducers/counter";

export function configureStore(initialState?: number[]) {
  let store = createStore(combineReducers({list: listReducer}), initialState)

  return store
}
