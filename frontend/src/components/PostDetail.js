import React from 'react'

import Post from './Post'
import CreateComment from './CreateComment'
import CommentList from './CommentList'
import VoteDown from '../components/VoteDown'
import VoteUp from '../components/VoteUp'

class PostDetail extends React.Component {

  componentDidMount () {
    this.props.fetchComments(this.props.postId)
  }

  componentDidUpdate (nextProps) {
    if (this.props.comments.length !== nextProps.comments.length) {
      this.props.fetchPosts(this.props.postId)
    }
  }

  render () {
    const { post, postId, comments, deleteComment, updateComment, createComment, handlePostUpVote, upVotePost, handlePostDownVote, downVotePost } = this.props
    
    return (
      <div>
        <Post {...post} />
        <VoteUp
          post = {post}
          upVotePost = {upVotePost}
          onClick={() => handlePostUpVote()} 
        />
        <VoteDown 
          post = {post}
          downVotePost = {downVotePost}
          onClick={() => handlePostDownVote()} 
        />   
        <CommentList 
          comments = {comments} 
          updateComment = {updateComment} 
          deleteComment = {deleteComment} />
        <CreateComment 
          postId = {postId} 
          createComment = {createComment} />
      </div>
      
    )
  }
}

export default PostDetail