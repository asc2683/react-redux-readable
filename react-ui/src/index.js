import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import configureStore from './store'
import { fetchPosts, fetchCategories } from './actions'

const store = configureStore(
  // chrome redux devtools ext
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.dispatch(fetchPosts())
store.dispatch(fetchCategories())

ReactDOM.render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>, 
  document.getElementById('root')
);