/* 
    fetch post data and populate form / done
    keek track of the changes made in the form field
    fire off edit post action that sends the update post request to API / done

    note: props are immutable;
    ref: http://www.thegreatcodeadventure.com/react-redux-tutorial-part-vi-the-edit-feature/
*/

import React from 'react'

export default class EditPost extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      post: this.props.post
    }
        
    this.updatePostState = this.updatePostState.bind(this)
    this.saveUpdate = this.saveUpdate.bind(this)
  }

  updatePostState (evt) {
    const field = evt.target.name
    const post = this.state.post
    post[field] = evt.target.value

    return this.setState({ post: post })
  }

  saveUpdate (evt) {
    evt.preventDefault()
    this.props.updatePost(this.state.post)

    this.setState({
      message: 'Post updated successfully!'
    })
  }

  componentDidMount () {
    const postId = this.props.match.params.id
    this.props.fetchPost(postId)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.post.id !== nextProps.post.id) {
      this.setState({ post: nextProps.post })
    }
  }


  render () {
    const { post } = this.props
    const { categories } = this.props 
    
    return (
      <div>
        <h2>Edit</h2>
        <form onSubmit={this.saveUpdate}>
          <div>
          <label>Title:</label> 
          <input 
            type="text"
            name="title"
            value={post.title}
            onChange={this.updatePostState} />
          </div>
          <div>
          <label>Post:</label> 
          <textarea 
            type="text"
            name="body"
            value={post.body}
            onChange={this.updatePostState} />
          </div>
          <div>
          <label>Category:</label> 
          <select name="category" value={post.category} onChange={this.updatePostState}>
            <option value="">Select a category</option>
              {categories.map(
                (category, i) =>
                  <option key={i.toString()} value={category.name}>{category.name}</option>
              )}
          </select>
        </div>
          <input type="submit" value="Update post" />
            {!this.props.error ? this.state.message : ''}
        </form>
      </div>
    )
  }  
}