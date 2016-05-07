import * as React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import { configureStore } from './store'
import { CountListContainer } from '../containers/counter';

let store = configureStore()

export class Wrapper extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={hashHistory}>
            <Route path='/' component={CountListContainer}>
            </Route>
          </Router>
        </div>
      </Provider>
    )
  }
}

render(<Wrapper />, document.getElementById('app-root'))
