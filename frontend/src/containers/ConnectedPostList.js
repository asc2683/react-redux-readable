import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostList from '../components/PostList'
import { deletePost, createPost, upVotePost  } from '../actions'

const mapStateToProps = (state, props) => {
  const categories = Object.values(state.categories).reduce(
    (acc,cur) => acc.concat(cur), [])

  const filteredPosts = state.filter 
    ? state.posts.filter((post) => post.category === state.filter)
    : state.posts

  return {
    categories,
    posts: filteredPosts,
    error: state.error && state.error.message    
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ deletePost, createPost, upVotePost }, dispatch)

const ConnectedPostList = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default ConnectedPostList