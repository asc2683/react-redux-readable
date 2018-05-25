import {
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE,
  FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE,
  DELETE_POST, EDIT_POST, UP_VOTE_POST_REQUEST, UP_VOTE_POST_SUCCESS,
  UP_VOTE_POST_FAILURE, DOWN_VOTE_POST_REQUEST, DOWN_VOTE_POST_SUCCESS,
  DOWN_VOTE_POST_FAILURE
} from '../actionTypes'
import { thunkCreator } from './utils'

export const fetchPosts = () => thunkCreator({
  types: [
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
  ],

  promise: fetch('https://localhost:5001/posts', { headers: { 'Authorization': 'whatever-you-want' } })
             .then(response => response.json())
})

export const fetchPost = (id) => thunkCreator({
  types: [
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
  ],

  promise: fetch(`https://localhost:5001/posts/${id}`, { headers: { 'Authorization': 'whatever-you-want' } })
             .then(response => response.json())
})

const _createPost = (post) => thunkCreator({
  types: [
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE
  ],

  promise: fetch('https://localhost:5001/posts', {
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
  fetch(`https://localhost:5001/posts/${id}`, {
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

fetch(`https://localhost:5001/posts/${post.id}`, {
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

const _upVotePost = (post) => thunkCreator({
  types: [
    UP_VOTE_POST_REQUEST,
    UP_VOTE_POST_SUCCESS,
    UP_VOTE_POST_FAILURE
  ],

  promise: fetch(`https://localhost:5001/posts/${post.id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...post,
      'option': 'upVote'
    })
  })
  .then(response => response.json())
})

export const upVotePost = (post) => (dispatch) =>
  _upVotePost(post)(dispatch)
  .catch(err =>
    console.log('Could not up vote a post:', err.message)
  )

  const _downVotePost = (post) => thunkCreator({
    types: [
      DOWN_VOTE_POST_REQUEST,
      DOWN_VOTE_POST_SUCCESS,
      DOWN_VOTE_POST_FAILURE
    ],

    promise: fetch(`https://localhost:5001/posts/${post.id}`, {
      method: 'POST',
      headers: {
        'Authorization': 'whatever-you-want',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...post,
        'option': 'downVote'
      })
    })
    .then(response => response.json())
  })

  export const downVotePost = (post) => (dispatch) =>
    _downVotePost(post)(dispatch)
    .catch(err =>
      console.log('Could not down vote a post:', err.message)
    )