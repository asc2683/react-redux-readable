import React from 'react'
import { Link } from 'react-router-dom'

import Post from './Post'
import DeletePost from './DeletePost'
import CreatePost from '../components/CreatePost'

const PostList = ({ posts, deletePost, createPost, categories }) =>
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
            <Link to={`post/${post.id}/edit`} >edit</Link>
          </li>
      )}
    </ul>
    <CreatePost 
      categories={categories}
      createPost={createPost}
      />
  </div>

export default PostList