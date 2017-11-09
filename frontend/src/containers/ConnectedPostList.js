import { connect } from 'react-redux'

import PostList from '../components/PostList'

const mapStateToProps = (state, props) => {
  const posts = state.posts

  return {
    posts
  }
}

const ConnectedPostList = connect(mapStateToProps)(PostList)

debugger
export default ConnectedPostList