import { 
  FETCH_POSTS_SUCCESS, CREATE_POST_SUCCESS, DELETE_POST, 
  EDIT_POST, UP_VOTE_POST_SUCCESS, DOWN_VOTE_POST_SUCCESS
} from '../actionTypes'

export default function postsReducer (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {

      // sort the posts on page load by vote score
      return action.result.sort((a, b) => (
        b.voteScore - a.voteScore
      ))
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

    case UP_VOTE_POST_SUCCESS: {
      const { result } = action
      return state.map(post => {
        if (post.id === result.id) {
          return result
        }
             
        return post
      })    
    }

    case DOWN_VOTE_POST_SUCCESS: {
      const { result } = action
      return state.map(post => {
        if (post.id === result.id) {
          return result
        }
             
        return post
      })    
    }

    case DELETE_POST: {
      return state.filter( post => post.id !== action.id )
    }

    default: {
      return state
    }
  }
}



