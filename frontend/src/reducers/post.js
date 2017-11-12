import { 
  FETCH_POST_SUCCESS
} from '../actionTypes'

export default function postReducer (state = [], action) {
  switch (action.type) {
    case FETCH_POST_SUCCESS: {
      return action.result
    }

    default: {
      return state
    }
  }
}