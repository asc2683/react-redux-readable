import React from 'react'

import CreateComment from './CreateComment'
import CommentList from './CommentList'
import VoteDown from './VoteDown'
import VoteUp from './VoteUp'
import PostMeta from './PostMeta'

class PostDetail extends React.Component {

  componentDidMount () {
    this.props.fetchComments(this.props.postId)
  }

  componentDidUpdate (nextProps) {
    if (this.props.comments.length !== nextProps.comments.length) {
      this.props.fetchPosts(this.props.postId)
    }
  }

  render () {
    const { post, postId, comments, deleteComment, updateComment, createComment, handlePostUpVote, upVotePost, handlePostDownVote, downVotePost } = this.props

    return (
      <div>
        <PostMeta {...post} />
        <VoteUp
          post={post}
          upVotePost={upVotePost}
          onClick={() => handlePostUpVote()}
        />
        <VoteDown
          post={post}
          downVotePost={downVotePost}
          onClick={() => handlePostDownVote()}
        />
        <CommentList
          comments={comments}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
        <CreateComment
          postId={postId}
          createComment={createComment}
        />
      </div>

    )
  }
}

export default PostDetail