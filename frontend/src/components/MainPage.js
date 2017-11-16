import React from 'react'

import ConnectedPostList from '../containers/ConnectedPostList'
// import ConnectedFilterList from '../containers/ConnectedFilterList'

const MainPage = () => 
  <div>
    {/* temp removing filter
      <div><ConnectedFilterList /></div>
    */}
    <div><ConnectedPostList /></div>
  </div>

export default MainPage