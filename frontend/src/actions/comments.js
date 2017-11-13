import {
  FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE,  
} from '../actionTypes'
import { thunkCreator } from './utils'

export const fetchComments = (id) => thunkCreator({
  types: [
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE
  ],

  promise: fetch(`http://localhost:3001/posts/${id}/comments`, { headers: { 'Authorization': 'whatever-you-want' } })
             .then(response => response.json())
})

const _createComment = (comment) => thunkCreator({
  types: [
    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE
  ],

  promise: fetch('http://localhost:3001/comments', {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...comment
    })
  })
  .then(response => response.json())
})

export const createComment = (comment) => (dispatch) =>
  _createComment(comment)(dispatch)
    .catch(err =>
      console.log('Could not create post:', err.message)
    )