import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostList from '../components/PostList'
import { deletePost } from '../actions'

const mapStateToProps = (state, props) => {
  const filteredPosts = state.filter 
    ? state.posts.filter((post) => post.category === state.filter)
    : state.posts

  return {
    posts: filteredPosts
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ deletePost }, dispatch)

const ConnectedPostList = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default ConnectedPostList