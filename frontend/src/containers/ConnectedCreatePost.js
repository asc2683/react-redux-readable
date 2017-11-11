import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CreatePost from '../components/CreatePost'
import { createPost } from '../actions'

const mapStateToProps = (state, props) => {
  const categories = Object.values(state.categories).reduce(
    (acc,cur) => acc.concat(cur), [])

  return {
    categories,
    error: state.error && state.error.message
  }
}

const mapDispatchToProps = (dispatch, props) => 
  bindActionCreators({ createPost }, dispatch)

const ConnectedCreatePost = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default ConnectedCreatePost