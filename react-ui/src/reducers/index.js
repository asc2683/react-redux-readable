import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import postsReducers from './posts'
import categoriesReducers from './categories'
import commentsReducer from './comments'
import sortReducer from './sort'

const appReducer = combineReducers({
  posts: postsReducers,
  categories: categoriesReducers,
  comments: commentsReducer,
  sort: sortReducer,
  route: routerReducer
})

export default appReducer