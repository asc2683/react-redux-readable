import {
  SET_SORT
} from '../actionTypes'

export const setSort = (sortType, sortOrder) => {
  return {
    type: SET_SORT,
    sortType,
    sortOrder
  }
}