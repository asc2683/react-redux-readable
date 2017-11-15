import React from 'react'

export default class VoteUp extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      post: this.props.post
    }

    this.handlePostUpVote = this.handlePostUpVote.bind(this)
  }

  handlePostUpVote () {
    const post = this.state.post
    const nextPost = Object.assign({}, post, {
      voteScore: ++post.voteScore
    })    
    this.setState({ post: nextPost })
    this.props.upVotePost(post)
  }

  render () {
    return (
      <div>
        <a href="javascript:void(0)" onClick={this.handlePostUpVote}>vote up</a>
      </div>
    )
  }
}