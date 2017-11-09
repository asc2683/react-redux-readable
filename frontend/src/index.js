import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import configureStore from './store'
import { fetchPosts, fetchCategories } from './actions'

const store = configureStore(
  // chrome redux devtools ext
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.dispatch(fetchPosts())
store.dispatch(fetchCategories())

console.log('initial state:', store.getState())

store.subscribe(() =>
  console.log('state changed:', store.getState())
)

ReactDOM.render(
  <App store={store} />, 
  document.getElementById('root')
);