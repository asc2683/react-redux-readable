import { 
  UP_VOTE_POST_SUCCESS, DOWN_VOTE_POST_SUCCESS
} from '../actionTypes'

export default function voteReducer (state = {}, action) {
  switch (action.type) {

    case DOWN_VOTE_POST_SUCCESS: {
      const { result } = action

      return state.map(post => {
        if (post.id === result.id) {
          return result
        }
             
        return post
      })    
    }

    case UP_VOTE_POST_SUCCESS: {

      const { result } = action
      console.log(result.id + ' : ' + result.voteScore)

      debugger

      return {
        ...state,
        [result.id]: result.score
      }
    }

    default: {
      return state
    }
  }
}