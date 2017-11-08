import {
  FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE
} from '../actionTypes'
import { thunkCreator } from './utils'

// fetch comments creator
export const fetchCategories = () => thunkCreator({
  types: [
    FETCH_CATEGORIES_REQUEST, 
    FETCH_CATEGORIES_SUCCESS, 
    FETCH_CATEGORIES_FAILURE
  ],

  // api request
  promise: fetch('http://localhost:3001/categories', { headers: { 'Authorization': 'whatever-you-want' } })
             .then(response => response.json())
})

