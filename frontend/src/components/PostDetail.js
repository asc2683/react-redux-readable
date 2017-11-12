import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'
import { fetchPost } from '../actions'

class PostDetail extends React.Component {

  componentDidMount () {
    const postId = this.props.match.params.id
    this.props.fetchPost(postId); 
  }

  render () {
    const { post } = this.props

    return (
      <div>
        <Post {...post} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, { fetchPost })(PostDetail)