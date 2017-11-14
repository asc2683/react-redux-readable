import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EditPost from '../components/EditPost'
import { fetchPost, updatePost } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = (dispatch, props) => 
  bindActionCreators({ fetchPost, updatePost }, dispatch)

const ConnectedEditPost = connect(mapStateToProps, mapDispatchToProps)(EditPost)

export default ConnectedEditPost