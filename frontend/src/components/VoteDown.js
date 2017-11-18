import React from 'react'

export class VoteDownPost extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      post: this.props.post
    }

    this.handlePostDownVote = this.handlePostDownVote.bind(this)
  }

  handlePostDownVote () {
    const post = this.props.post
    debugger
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

export class VoteDownComment extends React.Component {

    constructor (props) {
      super(props)

      this.state = {
        comment: this.props.comment
      }

      this.handleCommentDownVote = this.handleCommentDownVote.bind(this)
    }

    handleCommentDownVote () {
      const comment= this.props.comment
      const nextPost = Object.assign({}, comment, {
        voteScore: --comment.voteScore
      })
      this.setState({ comment: nextPost })
      this.props.downVoteComment(comment)
    }

    render () {
      return (
        <div>
          <button onClick={this.handleCommentDownVote}>vote comment down</button>
        </div>
      )
    }
  }