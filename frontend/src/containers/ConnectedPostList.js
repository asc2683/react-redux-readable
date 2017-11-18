import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostList from '../components/PostList'
import { deletePost, createPost, upVotePost, downVotePost } from '../actions'

const mapStateToProps = (state, props) => {
  const categories = Object.values(state.categories).reduce(
    (acc,cur) => acc.concat(cur), [])

  const filteredPosts = props.match.params.path
    ? state.posts.filter((post) => post.category === props.match.params.path)
    : state.posts

  filteredPosts.sort((a, b) => (
    b.voteScore - a.voteScore
  ))

  return {
    categories,
    posts: filteredPosts,
    error: state.error && state.error.message
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ deletePost, createPost, upVotePost, downVotePost }, dispatch)

const ConnectedPostList = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default ConnectedPostList