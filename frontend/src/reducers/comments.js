import { 
  FETCH_COMMENTS_SUCCESS, CREATE_COMMENT_SUCCESS
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

    default: {
      return state
    }
  }
}



