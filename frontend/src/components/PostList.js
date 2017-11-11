import React from 'react'
import { Link } from 'react-router-dom'

import Post from './Post'

const PostList = ({ posts }) =>
  <ul>
    {posts.map(
      (post, i) => 
        <li key={i.toString()}>
          <Link to={`post/${post.id}`}>
            <Post {...post} />
          </Link>
        </li>
    )}
  </ul>

export default PostList