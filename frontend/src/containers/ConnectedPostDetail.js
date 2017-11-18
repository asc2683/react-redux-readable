import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostDetail from '../components/PostDetail'
import { deleteComment, fetchComments, updateComment, fetchPosts, createComment, upVotePost, downVotePost } from '../actions'

const mapStateToProps = (state, props) => {
  const comments = state.comments
  const posts = state.posts
  const postId = props.match.params.id

  const post =  posts.find((post) => {
    return post.id === postId
  })

  return {
    post,
    postId,
    comments
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ deleteComment, fetchComments, updateComment, fetchPosts, createComment, upVotePost, downVotePost }, dispatch)

const ConnectedPostDetail = connect(mapStateToProps, mapDispatchToProps)(PostDetail)

export default ConnectedPostDetail