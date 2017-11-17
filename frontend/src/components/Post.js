import React from 'react'
import { Link } from 'react-router-dom'

import DeletePost from './DeletePost'
import VoteDown from '../components/VoteDown'
import VoteUp from '../components/VoteUp'

class Post extends React.Component {

  render () {
    const { posts, deletePost, handlePostUpVote, handlePostDownVote, upVotePost, downVotePost } = this.props
    
    return (
      <div>
        <ul>
          {posts.map(
            (post, i) => 
              <li key={i.toString()}>
                <Link to={`post/${post.id}`}>
                  {post.title}
                </Link>
                  <br />-- Vote Score: {post.voteScore}
                  <br />-- Comment Count: {post.commentCount} 
                <DeletePost 
                  onClick={() => deletePost(post.id)}
                />
                <Link to={`post/${post.id}/edit`} >
                  <button>edit</button>
                </Link>
                <VoteUp
                  post = {post}
                  upVotePost = {upVotePost}
                  onClick={() => handlePostUpVote()} 
                /> 
                <VoteDown
                  post = {post}
                  downVotePost = {downVotePost}
                  onClick={() => handlePostDownVote()} 
                />             
              </li>
          )}
        </ul>
      </div>


    ) // end return
  } // end render
} // end class

export default Post