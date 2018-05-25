import {
  SET_SORT
} from '../actionTypes'

export default function sortReducer (state = {}, action) {
  switch (action.type) {
    case SET_SORT: {
      const { sortOrder, sortType } = action
      return {
        ...state,
        sortType,
        sortOrder
      }
    }

    default: {
      return state
    }
  }
}