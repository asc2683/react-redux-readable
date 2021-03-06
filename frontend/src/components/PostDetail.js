import React from 'react'
import { Link } from 'react-router-dom'

import CreateComment from './CreateComment'
import CommentList from './CommentList'
import { VoteDownPost, VoteUpPost } from './Vote'
import PostMeta from './PostMeta'
import Sort from './Sort'
import { setSorting } from '../utils/sorting'
import DeletePost from './DeletePost'

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
    const { post, postId, comments, deleteComment, deletePost, updateComment, createComment, upVotePost, downVotePost, downVoteComment, upVoteComment, setSort, sortBy } = this.props
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
        <DeletePost
          onClick={() => deletePost(post.id)}
        />
        <Link to={`/post/${post.id}/edit`} >
          <button>edit</button>
        </Link>
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