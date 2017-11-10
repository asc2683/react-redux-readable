import { combineReducers } from 'redux'

import postsReducers from './posts'
import categoriesReducers from './categories'
import loadingReducer from './loading'
import filterReducer from './filter'

const appReducer = combineReducers({
  posts: postsReducers,
  filter: filterReducer,
  categories: categoriesReducers,
  loading: loadingReducer
})

export default appReducer