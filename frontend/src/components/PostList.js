import React from 'react'
import Post from './Post'

const PostList = ({ posts }) =>
  <ul>
    {posts.map(
      (post, i) => 
        <li key={i.toString()}>
          <Post {...post} />
        </li>
    )}
  </ul>
debugger;
export default PostList