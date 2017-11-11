import { connect } from 'react-redux'

import PostDetail from '../components/PostDetail'

const mapStateToProps = (state, props) => {
  console.log(state.route)
  
  return {
    posts: state.posts,
    route: state.route
  }
}

const ConnectedPostDetail = connect(mapStateToProps)(PostDetail)

export default ConnectedPostDetail