import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostDetail from '../components/PostDetail'
import { deleteComment, fetchComments, fetchPost, updateComment } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    post: state.post,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ deleteComment, fetchComments, fetchPost, updateComment }, dispatch)

const ConnectedPostDetail = connect(mapStateToProps, mapDispatchToProps)(PostDetail)

export default ConnectedPostDetail