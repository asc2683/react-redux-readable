/*
  Presentational components can be stateless functional components.
  This reinforces their single responsibility of rendering markup.
  https://www.fullstackreact.com/p/using-presentational-and-container-components-with-redux/
*/

import React from 'react'
import { Link } from 'react-router-dom'

import DeletePost from './DeletePost'
import { VoteDownPost, VoteUpPost } from './Vote'
import PostMeta from './PostMeta'

const Post = ({ posts, deletePost, upVotePost, downVotePost }) =>
  <div>
    <ul>
      {posts.map(
        (post, i) =>
          <li key={i.toString()}>
            <Link to={`post/${post.id}`}>
              <PostMeta {...post} />
            </Link>
            <DeletePost
              onClick={() => deletePost(post.id)}
            />
            <Link to={`post/${post.id}/edit`} >
              <button>edit</button>
            </Link>
            <VoteUpPost
              post={post}
              upVotePost = {upVotePost}
            />
            <VoteDownPost
              post={post}
              downVotePost = {downVotePost}
            />
          </li>
      )}
    </ul>
  </div>

export default Post