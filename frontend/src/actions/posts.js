import {
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE,
  FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, 
  DELETE_POST, EDIT_POST
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

export const fetchPost = (id) => thunkCreator({
  types: [
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
  ],

  promise: fetch(`http://localhost:3001/posts/${id}`, { headers: { 'Authorization': 'whatever-you-want' } })
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

const _deletePost = (id) => (
  fetch(`http://localhost:3001/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'whatever-you-want',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })
  .then(response => response.json())
)

export const deletePost = (id) => {
  _deletePost(id)
  return {
    type: DELETE_POST,
    id
  }
}

const _updatePost = (post) => (
fetch(`http://localhost:3001/posts/${post.id}`, {
    method: 'PUT',
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
)

export const updatePost = (post) => {
  _updatePost(post)
  return {
    type: EDIT_POST,
    post
  }
}

