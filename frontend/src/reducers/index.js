import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import postsReducers from './posts'
import categoriesReducers from './categories'
import loadingReducer from './loading'
// import filterReducer from './filter'
import postReducers from './post'
import commentsReducer from './comments'

const appReducer = combineReducers({
  posts: postsReducers,
  // filter: filterReducer,
  categories: categoriesReducers,
  post: postReducers,
  loading: loadingReducer,
  comments: commentsReducer,
  route: routerReducer
})

export default appReducer