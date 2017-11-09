import { combineReducers } from 'redux'

import postsReducers from './posts'
import categoriesReducers from './categories'
import loadingReducer from './loading';

const appReducer = combineReducers({
  posts: postsReducers,
  categories: categoriesReducers,
  loading: loadingReducer
})

export default appReducer