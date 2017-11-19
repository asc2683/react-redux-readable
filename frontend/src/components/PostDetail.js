import React from 'react'

import CreateComment from './CreateComment'
import CommentList from './CommentList'
import { VoteDownPost, VoteUpPost } from './Vote'
import PostMeta from './PostMeta'
import Sort from './Sort'
import { setSorting } from '../utils/sorting'

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
    const { post, postId, comments, deleteComment, updateComment, createComment, upVotePost, downVotePost, downVoteComment, upVoteComment, setSort, sortBy } = this.props
    const sortedComments = setSorting(comments, sortBy)

    if (!post) {
      return (
        <div>
          <p>Page not found!</p>
        </div>
      )
    }

    return (
      <div>
        <PostMeta {...post} />
        <VoteUpPost
          post={post}
          upVotePost={upVotePost}
        />
        <VoteDownPost
          post={post}
          downVotePost={downVotePost}
        />
        <Sort
          title="sort comments"
          comments={comments}
          setSort={setSort}
        />
        <CommentList
          comments={sortedComments}
          updateComment={updateComment}
          deleteComment={deleteComment}
          downVoteComment={downVoteComment}
          upVoteComment={upVoteComment}
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