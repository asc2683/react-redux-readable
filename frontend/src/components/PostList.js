import React from 'react'

import Post from './Post'
import FilterList from './FilterList'
import CreatePost from '../components/CreatePost'
import Sort from './Sort'

const PostList = ({ posts, categories, createPost, deletePost, upVotePost, downVotePost }) =>
  <div>
    <FilterList
      categories={categories}
    />
    <Sort
      title="sort posts"
      posts={posts}
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