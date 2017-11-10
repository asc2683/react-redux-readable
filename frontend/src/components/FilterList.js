import React from 'react'
import Filter from './Filter'

const FilterList = ({ categories, setFilter, clearFilter }) => 
  <span>
    {categories.map(
      (category, i) =>
        <span key={i.toString()}>
          <Filter
            name={category.name}
            onClick={() => setFilter(category.name)}
          />
          {' - '}
        </span>
    )}
    <a href="javascript:void(0)" onClick={clearFilter}>Show all posts</a>
  </span>

export default FilterList