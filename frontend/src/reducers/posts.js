import { 
  FETCH_POSTS_SUCCESS, CREATE_POST_SUCCESS
} from '../actionTypes'

export default function postsReducer (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      return action.result
    }

    case CREATE_POST_SUCCESS: {
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