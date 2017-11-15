import React from 'react'

import Post from './Post'
import CreateComment from './CreateComment'
import CommentList from './CommentList'

class PostDetail extends React.Component {

  componentDidMount () {
    const postId = this.props.match.params.id
    this.props.fetchPost(postId)
    this.props.fetchComments(postId)
  }

  render () {
    const { post, comments, match, deleteComment, updateComment, createComment } = this.props
    
    return (
      <div>
        <Post {...post} />
        <CommentList 
          comments = {comments} 
          updateComment = {updateComment} 
          deleteComment = {deleteComment} />
        <CreateComment 
          postId = {match.params.id} 
          createComment = {createComment} />
      </div>
      
    )
  }
}

export default PostDetail