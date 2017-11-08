import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import configureStore from './store'
import { fetchPosts, fetchCategories } from './actions'

const store = configureStore()
const initialState = store.getState()

store.dispatch(fetchPosts())
store.dispatch(fetchCategories())

console.log('initial state:', store.getState())

store.subscribe(() =>
  console.log('state changed:', store.getState())
)

console.log(initialState)

ReactDOM.render(
  <App store={store} />, 
  document.getElementById('root')
);