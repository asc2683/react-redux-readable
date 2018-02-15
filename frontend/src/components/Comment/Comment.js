import React from 'react'

import Timestamp from '../Timestamp'

const Comment = ({ timestamp, body, author, voteScore }) =>
  <span>
    {body}<br />Created by {author} at <Timestamp data={timestamp} />. Votes: {voteScore}
  </span>

export default Comment