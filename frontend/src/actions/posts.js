import {
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE,
  CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE
} from '../actionTypes'
import { thunkCreator } from './utils'

export const fetchPosts = () => thunkCreator({
  types: [
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
  ],

  promise: fetch('http://localhost:3001/posts', { headers: { 'Authorization': 'whatever-you-want' } })
             .then(response => response.json())
})

const _createPost = (post) => thunkCreator({
  types: [
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE
  ],

  promise: fetch('http://localhost:3001/posts', {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...post
    })
  })
  .then(response => response.json())
})

export const createPost = (post) => (dispatch) =>
  _createPost(post)(dispatch)
    .catch(err =>
      console.log('Could not create post:', err.message)
    )