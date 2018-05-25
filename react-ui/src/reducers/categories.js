import {
  FETCH_CATEGORIES_SUCCESS
} from '../actionTypes'

export default function categoriesReducers (state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return action.result
    }

    default: {
      return state
    }
  }
}