import {
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE
} from '../actionTypes'
import { thunkCreator } from './utils'

// fetch post action creator
export const fetchPosts = () => thunkCreator({
  // pass in action types
  types: [
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
  ],

  // api request
  promise: fetch('http://localhost:3001', { headers: { 'Authorization': 'whatever-you-want'}})
             .then(response => response.json())
})