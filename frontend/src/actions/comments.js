import {
  FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE,
  DELETE_COMMENT, EDIT_COMMENT, UP_VOTE_COMMENT_REQUEST, UP_VOTE_COMMENT_SUCCESS,
  UP_VOTE_COMMENT_FAILURE, DOWN_VOTE_COMMENT_REQUEST, DOWN_VOTE_COMMENT_SUCCESS,
  DOWN_VOTE_COMMENT_FAILURE
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

const _deleteComment = (id) => (
  fetch(`http://localhost:3001/comments/${id}`, {
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

export const deleteComment = (id) => {
  _deleteComment(id)
  return {
    type: DELETE_COMMENT,
    id
  }
}

const _updateComment = (comment) => (

  fetch(`http://localhost:3001/comments/${comment.id}`, {
      method: 'PUT',
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
  )

  export const updateComment = (comment) => {
    _updateComment(comment)
    return {
      type: EDIT_COMMENT,
      comment
    }
  }

  const _upVoteComment = (comment) => thunkCreator({
    types: [
      UP_VOTE_COMMENT_REQUEST,
      UP_VOTE_COMMENT_SUCCESS,
      UP_VOTE_COMMENT_FAILURE
    ],

    promise: fetch(`http://localhost:3001/comments/${comment.id}`, {
      method: 'POST',
      headers: {
        'Authorization': 'whatever-you-want',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...comment,
        'option': 'upVote'
      })
    })
    .then(response => response.json())
  })

  export const upVoteComment = (comment) => (dispatch) =>
    _upVoteComment(comment)(dispatch)
    .catch(err =>
      console.log('Could not up vote a comment:', err.message)
    )

    const _downVoteComment = (comment) => thunkCreator({
      types: [
        DOWN_VOTE_COMMENT_REQUEST,
        DOWN_VOTE_COMMENT_SUCCESS,
        DOWN_VOTE_COMMENT_FAILURE
      ],

      promise: fetch(`http://localhost:3001/comments/${comment.id}`, {
        method: 'POST',
        headers: {
          'Authorization': 'whatever-you-want',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...comment,
          'option': 'downVote'
        })
      })
      .then(response => response.json())
    })

    export const downVoteComment = (comment) => (dispatch) =>
      _downVoteComment(comment)(dispatch)
      .catch(err =>
        console.log('Could not down vote a comment:', err.message)
      )