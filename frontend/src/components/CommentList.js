import React from 'react'

import Comment from './Comment'
import DeleteComment from './DeleteComment'
import HiddenContent from'./HiddenContent'
import EditComment from './EditComment'

const CommentList = ({ comments, updateComment, deleteComment }) =>
  <ul>
  {comments.map(
    (comment, i) => 
      <li key={i.toString()}>
        <Comment {...comment} />
        <DeleteComment
          onClick={() => deleteComment(comment.id)} 
        />
        <HiddenContent title="edit">
          <EditComment
            comment = {comment}
            updateComment = {updateComment} 
          />
        </HiddenContent>
      </li>
  )}
  </ul>

export default CommentList