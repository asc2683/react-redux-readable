import { connect } from 'react-redux'

import PostList from '../components/PostList'
import * as actions from '../actions/posts'

const mapStateToProps = (state, props) => {
  const sortBy = state.sort
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
    sortBy,
    posts: filteredPosts,
    error: state.error && state.error.message
  }
}

export default connect(mapStateToProps, actions)(PostList);