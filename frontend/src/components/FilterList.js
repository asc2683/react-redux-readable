import React from 'react'
import { Link } from 'react-router-dom'

const FilterList = ({ categories }) =>
  <span>
    {categories.map(
      (category, i) =>
        <span key={i.toString()}>
          <Link to={`/${category.path}`}>{category.path}</Link>

          {' - '}
        </span>
    )}
    <Link to={"/"}>all posts</Link>
  </span>

export default FilterList