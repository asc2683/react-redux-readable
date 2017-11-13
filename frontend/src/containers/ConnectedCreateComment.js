import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CreateComment from '../components/CreateComment'
import { createComment } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    error: state.error && state.error.message
  }
}

const mapDispatchToProps = (dispatch, props) => 
  bindActionCreators({ createComment }, dispatch)

const ConnectedCreateComment = connect(mapStateToProps, mapDispatchToProps)(CreateComment)

export default ConnectedCreateComment