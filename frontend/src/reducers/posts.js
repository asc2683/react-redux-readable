import { 
  FETCH_POSTS_SUCCESS
} from '../actionTypes'

export default function postsReducer (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      return action.result
    }

    default: {
      return state
    }
  }
}