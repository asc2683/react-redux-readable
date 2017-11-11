import React from 'react'

import ConnectedPostList from '../containers/ConnectedPostList'
import ConnectedFilterList from '../containers/ConnectedFilterList'
import ConnectedCreatePost from '../containers/ConnectedCreatePost'

const MainPage = () => 
  <div>
    <div><ConnectedFilterList /></div>
    <div><ConnectedPostList /></div>
    <hr />
    <div><ConnectedCreatePost /></div>
  </div>

export default MainPage