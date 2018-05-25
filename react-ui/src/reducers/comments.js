import {
  FETCH_COMMENTS_SUCCESS, CREATE_COMMENT_SUCCESS, DELETE_COMMENT,
  EDIT_COMMENT, DOWN_VOTE_COMMENT_SUCCESS, UP_VOTE_COMMENT_SUCCESS
} from '../actionTypes'

export default function commentssReducer (state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS: {
      return action.result
    }

    case CREATE_COMMENT_SUCCESS: {
      const { result } = action
      return [
        ...state,
        result
      ]
    }

    case EDIT_COMMENT: {
      return state.map(comment => {
        if (comment.id === action.comment.id) {
          return action.comment
        }

        return comment
      })
    }

    case DELETE_COMMENT: {
      return state.filter( comment => comment.id !== action.id )
    }

    case DOWN_VOTE_COMMENT_SUCCESS: {
      const { result } = action

      return state.map(comment => {
        if (comment.id === result.id) {
          return {
            ...comment,
            voteScore: result.voteScore
          }
        }
        return comment
      })
    }

    case UP_VOTE_COMMENT_SUCCESS: {
      const { result } = action

      return state.map(comment => {
        if (comment.id === result.id) {
          return {
            ...comment,
            voteScore: result.voteScore
          }
        }
        return comment
      })
    }

    default: {
      return state
    }
  }
}



