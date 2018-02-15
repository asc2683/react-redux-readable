import React from 'react'

import Post from './Post'
import PostForm from '../components/Forms/PostForm'
import Sort from './Sort'
import { setSorting } from '../utils/sorting'

const PostList = ({ posts, categories, createPost, deletePost, upVotePost, downVotePost, sortBy, setSort }) => {
  const sortedPosts = setSorting(posts, sortBy)

  return (
    <div>
      <Sort
        title="sort posts"
        posts={posts}
        setSort={setSort}
      />
      <Post
        posts={sortedPosts}
        deletePost={deletePost}
        upVotePost={upVotePost}
        downVotePost={downVotePost}
      />
      <PostForm
        categories={categories}
        createPost={createPost}
      />
    </div>
  )
}

export default PostList