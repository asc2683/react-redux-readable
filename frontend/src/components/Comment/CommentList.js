import React from 'react'

import Comment from './Comment'
import DeleteComment from './DeleteComment'
import HiddenContent from'../HiddenContent'
import EditComment from './EditComment'
import { VoteUpComment, VoteDownComment } from '../Vote'

const CommentList = ({ comments, updateComment, deleteComment, upVoteComment, downVoteComment }) =>
  <ul>
  {comments.map(
    (comment, i) =>
      <li key={i.toString()}>
        <Comment {...comment} />
        <VoteUpComment
          comment={comment}
          upVoteComment={upVoteComment}
        />
        <VoteDownComment
          comment={comment}
          downVoteComment={downVoteComment}
        />
        <DeleteComment
          onClick={() => deleteComment(comment.id)}
        />
        <HiddenContent title="edit">
          <EditComment
            comment={comment}
            updateComment={updateComment}
          />
        </HiddenContent>
      </li>
  )}
  </ul>

export default CommentList