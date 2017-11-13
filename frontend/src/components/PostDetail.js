import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Post from './Post'
import Comment from './Comment'
import DeleteComment from './DeleteComment'
import { fetchPost, fetchComments } from '../actions'

import ConnectedCreateComment from '../containers/ConnectedCreateComment'

class PostDetail extends React.Component {

  componentDidMount () {
    const postId = this.props.match.params.id
    this.props.fetchPost(postId)
    this.props.fetchComments(postId)
  }

  render () {
    const { post, comments, match, deleteComment } = this.props
    
    return (
      <div>
        <Post {...post} />
        <hr />
        <ul>
          {comments.map(
            (comment, i) => 
              <li key={i.toString()}>
                <Comment {...comment} />
                <DeleteComment
                onClick={() => deleteComment(comment.id)}
              />
              </li>
          )}
        </ul>
        <ConnectedCreateComment 
          postId = {match.params.id} 
        />
      </div>
      
    )
  }
}

export default PostDetail