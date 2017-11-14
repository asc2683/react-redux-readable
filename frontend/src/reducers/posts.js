import { 
  FETCH_POSTS_SUCCESS, CREATE_POST_SUCCESS, DELETE_POST, 
  EDIT_POST
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

    case EDIT_POST: {
      return state.map(post => {
        if (post.id === action.post.id) {
          return action.post
        }
        
        return post
      })
    }

    case DELETE_POST: {
      const { type, id } = action
      return state.filter( post => post.id !== action.id )
    }

    default: {
      return state
    }
  }
}



