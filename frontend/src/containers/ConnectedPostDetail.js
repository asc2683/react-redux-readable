import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostDetail from '../components/PostDetail'
import { deleteComment, deletePost, fetchComments, updateComment, fetchPosts, createComment, upVotePost, downVotePost, downVoteComment, upVoteComment, setSort } from '../actions'

const mapStateToProps = (state, props) => {
  const sortedComments = state.comments
  const posts = state.posts
  const postId = props.match.params.id
  const sortBy = state.sort

  const post =  posts.find((post) => {
    return post.id === postId
  })

  sortedComments.sort((a, b) => (
    b.voteScore - a.voteScore
  ))

  return {
    post,
    postId,
    sortBy,
    comments: sortedComments,
    error: state.error && state.error.message
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ deleteComment, deletePost, fetchComments, updateComment, fetchPosts, createComment, upVotePost, downVotePost, downVoteComment, upVoteComment, setSort }, dispatch)

const ConnectedPostDetail = connect(mapStateToProps, mapDispatchToProps)(PostDetail)

export default ConnectedPostDetail