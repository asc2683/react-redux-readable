import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EditPost from '../components/EditPost'
import { fetchPost, updatePost } from '../actions'

const mapStateToProps = (state, props) => {
  const posts = state.posts
  const postId = props.match.params.id
  const categories = Object.values(state.categories).reduce(
    (acc,cur) => acc.concat(cur), [])
  
  const post = posts.find((post) => {
    return post.id === postId
  })
    
  return {
    post,
    postId,
    categories
  }
}

const mapDispatchToProps = (dispatch, props) => 
  bindActionCreators({ fetchPost, updatePost }, dispatch)

const ConnectedEditPost = connect(mapStateToProps, mapDispatchToProps)(EditPost)

export default ConnectedEditPost