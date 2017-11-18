import React from 'react'

export default class EditComment extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      comment: this.props.comment
    }

    this.updateCommentState = this.updateCommentState.bind(this)
    this.saveCommentUpdate = this.saveCommentUpdate.bind(this)
  }

  updateCommentState (evt) {
    const field = evt.target.name
    const comment = this.state.comment
    comment[field] = evt.target.value

    return this.setState({ comment: comment })
  }

  saveCommentUpdate (evt) {
    evt.preventDefault()
    this.props.updateComment(this.state.comment)

    this.setState({
      message: 'Comment updated successfully!'
    })
  }

  render () {
    const { comment } = this.props
    console.log(this.props)

    return (
      <div>
        <h2>Edit</h2>
        <form onSubmit={this.saveCommentUpdate}>
          <div>
          <label>Title:</label>
          <input
            type="text"
            name="author"
            value={comment.author}
            onChange={this.updateCommentState} />
          </div>
          <div>
          <label>Comment:</label>
          <textarea
            type="text"
            name="body"
            value={comment.body}
            onChange={this.updateCommentState} />
          </div>
          <input type="submit" value="Update comment" />
            {!this.props.error ? this.state.message : ''}
        </form>
      </div>
    )
  }
}