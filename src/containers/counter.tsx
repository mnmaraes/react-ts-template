import { connect } from 'react-redux'
import { CounterList, Counter, ICounterProps, ICounterListProps } from '../components/counter'
import { increment, decrement, addCounter, removeCounter } from '../actions/counter'

// Counter
interface ICountState {
  count: number
}

const mapStateToCounterProps = (state: ICountState) => {
  return {
    count: state.count
  }
}

const mapDispatchToCounterProps = (dispatch: Function) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export const CountContainer = connect(
  mapStateToCounterProps,
  mapDispatchToCounterProps
)(Counter)

// Counter List
interface IListState {
  list: number[]
}

const mapStateToListProps = (state: IListState) => {
  return {
    counters: state.list
  }
}

const mapDispatchToListProps = (dispatch: Function) => {
  return {
    onAddCounter: () => dispatch(addCounter()),
    onRemoveCounter: (index: number) => () => dispatch(removeCounter(index)),

    onIncrement: (index: number) => () => dispatch(increment(index)),
    onDecrement: (index: number) => () => dispatch(decrement(index))
  }
}

export const CountListContainer = connect(
  mapStateToListProps,
  mapDispatchToListProps
)(CounterList)
