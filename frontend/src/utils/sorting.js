export const setSorting = (list, sortBy) => {
  if (list !== undefined) {
    switch (sortBy.sortType) {
      case 'vote':
        return sortBy.sortOrder === 'asc'
          ? list.sort((a,b) => a.voteScore > b.voteScore)
          : list.sort((a,b) => a.voteScore < b.voteScore)
      case 'date':
        return sortBy.sortOrder === 'asc'
          ? list.sort((a,b) => a.timestamp > b.timestamp)
          : list.sort((a,b) => a.timestamp < b.timestamp)
      default:
        return list
    }
  } else {
      return list
    }
}