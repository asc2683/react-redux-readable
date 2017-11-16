import React from 'react'
import { Link } from 'react-router-dom'

import Post from './Post'
import DeletePost from './DeletePost'
import CreatePost from '../components/CreatePost'
import VoteDown from '../components/VoteDown'
import VoteUp from '../components/VoteUp'

class PostList extends React.Component {

  render () {    
    const { posts, deletePost, createPost, categories, handlePostUpVote, upVotePost } = this.props

    return (
      <div>
        <ul>
          {posts.map(
            (post, i) => 
              <li key={i.toString()}>
                <Link to={`post/${post.id}`}>
                  <Post {...post} />
                </Link>
                <DeletePost 
                  onClick={() => deletePost(post.id)}
                />
                <Link to={`post/${post.id}/edit`} ><button>edit</button></Link>
                <VoteUp
                  post = {post}
                  upVotePost = {upVotePost}
                  onClick={() => handlePostUpVote()} 
                />
                <VoteDown 
                  onClick={() => alert("Down Vote Cliked")} 
                />
              </li>
          )}
        </ul>
        <CreatePost 
          categories={categories}
          createPost={createPost}
          />
      </div>
    ) 
  }
} 

export default PostList