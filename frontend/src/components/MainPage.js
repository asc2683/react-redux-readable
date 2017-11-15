import React from 'react'

import ConnectedPostList from '../containers/ConnectedPostList'
import ConnectedFilterList from '../containers/ConnectedFilterList'

const MainPage = () => 
  <div>
    <div><ConnectedFilterList /></div>
    <div><ConnectedPostList /></div>
  </div>

export default MainPage