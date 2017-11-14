import React from 'react'

export default class EditPost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body
    }

    this.updateTitle = this.updateTitle.bind(this)
    this.updateBody = this.updateBody.bind(this)
    this.updatePost = this.updatePost.bind(this)
  }

  updateTitle (evt) {
    this.setState({
      title: evt.target.value
    })
  }

  updateBody (evt) {
    this.setState({
      body: evt.target.value
    })
  }

  updatePost (evt) {
    evt.preventDefault()
    const { id, title, body } = this.state


    this.props.updatePost({
      id, title, body
    })

    this.setState({
      message: 'Post updated successfully!'
    })
  }

  componentDidMount () {
    const postId = this.props.match.params.id
    this.props.fetchPost(postId)
  }

  render () {
    const { post } = this.props

    return (
      <div>
        <h2>Edit</h2>
        <form onSubmit={this.updatePost}>
          <div>
          <label>Title:</label> 
          <input type="text"
                value={post.title}
                onChange={this.updateTitle}
          />
          </div>

          <div>
          <label>Post:</label> 
          <textarea type="text"
                value={post.body}
                onChange={this.updateBody}
          />
          </div>
          <input type="submit" value="Update post" />
            {!this.props.error ? this.state.message : ''}
        </form>
      </div>
    )
  }

  
}