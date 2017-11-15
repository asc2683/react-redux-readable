import React from 'react'
import uuidv4 from 'uuid/v4'

import HiddenContent from './HiddenContent'

export default class CreatePost extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      timestamp: '',
      title: '',
      body: '',
      author: '',
      category: '',
      voteScore: 1,
      deleted: false
    }

    this.handleTitle = this.handleTitle.bind(this)    
    this.handleBody = this.handleBody.bind(this)
    this.handleAuthor = this.handleAuthor.bind(this)    
    this.handleCategory = this.handleCategory.bind(this)    
    this.handleSubmit = this.handleSubmit.bind(this)    
  }

  handleTitle (evt) {
    this.setState({
      title: evt.target.value
    })
  }

  handleBody (evt) {
    this.setState({
      body: evt.target.value
    })
  }

  handleCategory (evt) {
    this.setState({
      category: evt.target.value
    })
  }

  handleAuthor (evt) {
    this.setState({
      author: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { id, timestamp, title, body, author, category } = this.state

    this.props.createPost({ id: uuidv4(), timestamp: Date.now(), title, body, author, category })
    this.setState({
      message: 'Post created successfully!'
    })
  }

  render () {
    const { categories } = this.props 

    return (
      <HiddenContent
        title="new post"
      >
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label> 
            <input 
              type="text"
              value={this.state.title}
              onChange={this.handleTitle} />
          </div>
          <div>
            <label>Post:</label> 
            <textarea 
              type="text"
              value={this.state.body}
              onChange={this.handleBody} />
          </div>
          <div>
            <label>Category:</label> 
            <select value={this.state.category} onChange={this.handleCategory}>
              <option value="">Select a category</option>
                {categories.map(
                  (category, i) =>
                    <option key={i.toString()} value={category.name}>{category.name}</option>
                )}
            </select>
          </div>
          <div>
            <label>Author:</label> 
            <input 
              type="text"
              value={this.state.author}
              onChange={this.handleAuthor} />
          </div>

          <input type="submit" value="Create post" />
            {!this.props.error ? this.state.message : ''}
        </form>
      </HiddenContent>
    )
  }
}