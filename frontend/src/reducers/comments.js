import { 
  FETCH_COMMENTS_SUCCESS, CREATE_COMMENT_SUCCESS, DELETE_COMMENT,
  EDIT_COMMENT
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

    default: {
      return state
    }
  }
}



