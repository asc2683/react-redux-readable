import { 
  FETCH_COMMENTS_SUCCESS, CREATE_COMMENT_SUCCESS, DELETE_COMMENT
} from '../actionTypes'

export default function commentssReducer (state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS: {
      return action.result
    }

    case CREATE_COMMENT_SUCCESS: {
      const { type, result } = action
      return [
        ...state,
        result
      ]
    }

    case DELETE_COMMENT: {
      const { type, id } = action
      return state.filter( comment => comment.id !== action.id )
    }

    default: {
      return state
    }
  }
}



