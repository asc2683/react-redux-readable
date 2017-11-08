import { combineReducers } from 'redux'

import postsReducers from './posts'
import categoriesReducers from './categories'

const appReducer = combineReducers({
  posts: postsReducers,
  categories: categoriesReducers
})

export default appReducer