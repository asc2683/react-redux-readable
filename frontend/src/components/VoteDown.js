import React from 'react'

export default class VoteDown extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      post: this.props.post
    }

    this.handlePostDownVote = this.handlePostDownVote.bind(this)
  }

  handlePostDownVote () {
    const post = this.props.post
    const nextPost = Object.assign({}, post, {
      voteScore: --post.voteScore
    })
    this.setState({ post: nextPost })
    this.props.downVotePost(post)
  }

  render () {
    return (
      <div>
        <button onClick={this.handlePostDownVote}>vote down</button>
      </div>
    )
  }
}