import React from 'react'

import Post from './Post'
import CreatePost from '../components/CreatePost'

class PostList extends React.Component {
  
  render () {
    const { posts, categories, createPost, deletePost, upVotePost, downVotePost } = this.props
    
    return (
      <div>
        <Post
          posts = {posts}
          deletePost = {deletePost}
          upVotePost = {upVotePost}
          downVotePost = {downVotePost}    
        />
        <CreatePost 
          categories={categories}
          createPost={createPost}
          />
      </div>
    ) 
  }
} 

export default PostList