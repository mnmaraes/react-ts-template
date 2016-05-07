import * as React from 'react'

export interface ICounterProps {
  count: number

  onIncrement: () => void
  onDecrement: () => void
}

export class Counter extends React.Component<ICounterProps, {}> {
  render() {
    return (
      <div>
        <button onClick={this.props.onDecrement}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.props.onIncrement}>+</button>
      </div>
    )
  }
}

export interface ICounterListProps {
  counters: [number]

  onAddCounter: () => void
  onRemoveCounter: (index: number) => () => void

  onIncrement: (index: number) => () => void
  onDecrement: (index:number) => () => void
}

export class CounterList extends React.Component<ICounterListProps, {}> {
  render () {
    return (
      <div>
        {this.props.counters.map((counter, index) => {
          let counterProp = {
            count: counter,

            onIncrement: this.props.onIncrement(index),
            onDecrement: this.props.onDecrement(index)
          }

          return (
            <div key={index}>
              <Counter {...counterProp}></Counter>
              <button onClick={this.props.onRemoveCounter(index)}>Remove</button>
            </div>
          )
        })}
        <span>{this.props.counters.reduce((acc, counter) => acc + counter, 0)}</span>
        <button onClick={this.props.onAddCounter}>Add Counter</button>
      </div>
    )
  }
}
