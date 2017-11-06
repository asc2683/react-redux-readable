import { createStore } from 'redux'
import appReducer from '../reducers'

import middleware from './middleware'

export default function configureStore(initialstate) {
  return createStore(initialState)
}