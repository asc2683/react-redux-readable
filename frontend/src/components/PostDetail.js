import React from 'react'

import Post from './Post'

const PostDetail = ({ posts, route }) =>
  <div>
    <h1>Post Detail Page { route.location.pathname }</h1>
  </div>

export default PostDetail