import React from 'react'

import Timestamp from './Timestamp'

const PostMeta = ({ timestamp, title, body, author, category, voteScore, commentCount }) =>
  <span>
    <b>{title}</b>: {body}, (Created by {author} at <Timestamp data={timestamp} />). Category: {category}, Votes: {voteScore}, Comments {commentCount}
  </span>

export default PostMeta