import { connect } from 'react-redux'

import PostList from '../components/PostList'

const mapStateToProps = (state, props) => {
  const filteredPosts = state.filter 
    ? state.posts.filter((post) => post.category === state.filter)
    : state.posts

  return {
    posts: filteredPosts
  }
}

const ConnectedPostList = connect(mapStateToProps)(PostList)

export default ConnectedPostList