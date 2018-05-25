import React from 'react'

export class VoteUpPost extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      post: this.props.post
    }

    this.handlePostUpVote = this.handlePostUpVote.bind(this)
  }

  handlePostUpVote () {
    const post = this.props.post
    const nextPost = Object.assign({}, post, {
      voteScore: ++post.voteScore
    })
    this.setState({ post: nextPost })
    this.props.upVotePost(post)
  }

  render () {
    return (
      <div>
        <button onClick={this.handlePostUpVote}>vote up</button>
      </div>
    )
  }
}

export class VoteUpComment extends React.Component {

    constructor (props) {
      super(props)

      this.state = {
        comment: this.props.comment
      }

      this.handleCommentUpVote = this.handleCommentUpVote.bind(this)
    }

    handleCommentUpVote () {
      const comment = this.props.comment
      const nextPost = Object.assign({}, comment, {
        voteScore: ++comment.voteScore
      })
      this.setState({ post: nextPost })
      this.props.upVoteComment(comment)
    }

    render () {
      return (
        <div>
          <button onClick={this.handleCommentUpVote}>vote up</button>
        </div>
      )
    }
  }

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
          <button onClick={this.handleCommentDownVote}>vote down</button>
        </div>
      )
    }
  }