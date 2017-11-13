import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'
import Comment from './Comment'
import { fetchPost, fetchComments } from '../actions'

import ConnectedCreateComment from '../containers/ConnectedCreateComment'

class PostDetail extends React.Component {

  componentDidMount () {
    const postId = this.props.match.params.id
    this.props.fetchPost(postId)
    this.props.fetchComments(postId)
  }

  render () {
    const { post, comments, match } = this.props
    
    return (
      <div>
        <Post {...post} />
        <hr />
        <ul>
          {comments.map(
            (comment, i) => 
              <li key={i.toString()}>
                <Comment {...comment} />
              </li>
          )}
        </ul>
        <ConnectedCreateComment 
          postId = {this.props.match.params.id} 
        />
      </div>
      
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.post,
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchPost, fetchComments })(PostDetail)