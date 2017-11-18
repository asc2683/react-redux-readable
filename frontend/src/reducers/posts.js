import {
  FETCH_POSTS_SUCCESS, CREATE_POST_SUCCESS, DELETE_POST,
  EDIT_POST, UP_VOTE_POST_SUCCESS, DOWN_VOTE_POST_SUCCESS
} from '../actionTypes'

export default function postsReducer (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      return action.result
    }

    case CREATE_POST_SUCCESS: {
      const { result } = action
      return [
        ...state,
        result
      ]
    }

    case EDIT_POST: {
      return state.map(post => {
        if (post.id === action.post.id) {
          return action.post
        }

        return post
      })
    }

    case DELETE_POST: {
      return state.filter( post => post.id !== action.id )
    }

    case DOWN_VOTE_POST_SUCCESS: {
      const { result } = action

      return state.map(post => {
        if (post.id === result.id) {
          return {
            ...post,
            voteScore: result.voteScore
          }
        }
        return post
      })
    }

    case UP_VOTE_POST_SUCCESS: {
      const { result } = action

      return state.map(post => {
        if (post.id === result.id) {
          return {
            ...post,
            voteScore: result.voteScore
          }
        }
        return post
      })
    }

    default: {
      return state
    }
  }
}



