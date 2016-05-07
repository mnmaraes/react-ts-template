import { INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER, ICounterAction } from '../actions/counter'

export function counterReducer(state: number = 0, action: ICounterAction): number {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export function listReducer(state: number[] = [], action: ICounterAction): number[] {
  switch (action.type) {
    case DECREMENT:
    case INCREMENT:
      return state.map((counter, index) => {
        return index == action.index ? counterReducer(counter, action) : counter
      })
    case ADD_COUNTER:
      return [...state, 0]
    case REMOVE_COUNTER:
      return state.filter((_, index) => index != action.index)
    default:
      return state
  }
}
