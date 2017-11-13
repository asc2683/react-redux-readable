import { 
  FETCH_COMMENTS_SUCCESS
} from '../actionTypes'

export default function commentssReducer (state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS: {
      return action.result
    }

    default: {
      return state
    }
  }
}



