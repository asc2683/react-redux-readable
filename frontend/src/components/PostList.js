import React from 'react'

import Post from './Post'
import FilterList from './FilterList'
import CreatePost from '../components/CreatePost'

const PostList = ({ posts, categories, createPost, deletePost, upVotePost, downVotePost }) =>
  <div>
    <FilterList
      categories={categories}
    />
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