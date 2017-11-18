import React from 'react'

import Post from './Post'
import CreatePost from '../components/CreatePost'

const PostList = ({ posts, categories, createPost, deletePost, upVotePost, downVotePost }) =>
  <div>
    <Post
      posts={posts}
      deletePost={deletePost}
      upVotePost={upVotePost}
      downVotePost={downVotePost}
    />
    <CreatePost
      categories={categories}
      createPost={createPost}
    />
  </div>

export default PostList