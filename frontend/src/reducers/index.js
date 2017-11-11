import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import postsReducers from './posts'
import categoriesReducers from './categories'
import loadingReducer from './loading'
import filterReducer from './filter'

const appReducer = combineReducers({
  posts: postsReducers,
  filter: filterReducer,
  categories: categoriesReducers,
  loading: loadingReducer,
  route: routerReducer
})

export default appReducer