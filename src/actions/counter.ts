
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const ADD_COUNTER = 'ADD_COUNTER'
export const REMOVE_COUNTER = 'REMOVE_COUNTER'

export interface ICounterAction {
  type: string
  index?: number
}

export function increment(index?: number): ICounterAction {
  return {
    type: INCREMENT,
    index
  }
}

export function decrement(index?: number): ICounterAction {
  return {
    type: DECREMENT,
    index
  }
}

export function addCounter(): ICounterAction {
  return {
    type: ADD_COUNTER
  }
}

export function removeCounter(index: number): ICounterAction {
  return {
    type: REMOVE_COUNTER,
    index
  }
}
