import React from 'react'
import uuidv4 from 'uuid/v4'

import HiddenContent from './HiddenContent'

export default class CreateComment extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      parentId: '',
      timestamp: '',
      body: '',
      author: '',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }

    this.handleBody = this.handleBody.bind(this)
    this.handleAuthor = this.handleAuthor.bind(this)    
    this.handleSubmit = this.handleSubmit.bind(this)    
  }

  handleBody (evt) {
    this.setState({
      body: evt.target.value
    })
  }

  handleAuthor (evt) {
    this.setState({
      author: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { id, parentId, timestamp, body, author } = this.state
    const { postId } = this.props

    this.props.createComment({ 
      id: uuidv4(), 
      parentId: postId,  
      timestamp: Date.now(), 
      body, 
      author
     })

    this.setState({
      message: 'Comment created successfully!'
    })
  }

  render () {
    const { categories } = this.props 

    return (
      <HiddenContent
        title='new comment'
      >
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Comment:</label> 
            <textarea 
              type="text"
              value={this.state.body}
              onChange={this.handleBody} />
          </div>
          <div>
            <label>Author:</label> 
            <input 
              type="text"
              value={this.state.author}
              onChange={this.handleAuthor} />
          </div>
          <input type="submit" value="Create comment" />
            {!this.props.error ? this.state.message : ''}
        </form>
      </HiddenContent>
    )
  }
}