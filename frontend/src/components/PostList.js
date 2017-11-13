import React from 'react'
import { Link } from 'react-router-dom'

import Post from './Post'
import DeletePost from './DeletePost'

const PostList = ({ posts, deletePost }) =>
  <div>
    <ul>
      {posts.map(
        (post, i) => 
          <li key={i.toString()}>
            <Link to={`post/${post.id}`}>
              <Post {...post} />
            </Link>
            <DeletePost 
              onClick={() => deletePost(post.id)}
            />
          </li>
      )}
    </ul>
  </div>

export default PostList