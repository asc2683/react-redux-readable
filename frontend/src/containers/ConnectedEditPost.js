import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EditPost from '../components/EditPost'
import { fetchPost, updatePost } from '../actions'

const mapStateToProps = (state, props) => {
  const categories = Object.values(state.categories).reduce(
    (acc,cur) => acc.concat(cur), [])
    
  return {
    categories,
    post: state.post
  }
}

const mapDispatchToProps = (dispatch, props) => 
  bindActionCreators({ fetchPost, updatePost }, dispatch)

const ConnectedEditPost = connect(mapStateToProps, mapDispatchToProps)(EditPost)

export default ConnectedEditPost