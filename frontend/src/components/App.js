import React from 'react'
import { Provider } from 'react-redux'

import ConnectedPostList from '../containers/ConnectedPostList'
import ConnectedLoading from '../containers/ConnectedLoading'
import ConnectedFilterList from '../containers/ConnectedFilterList'
import ConnectedCreatePost from '../containers/ConnectedCreatePost'

const App = ({ store }) =>
  <Provider store={store}>
    <div>
      <ConnectedLoading />
      <ConnectedFilterList />
      <ConnectedPostList />
      <ConnectedCreatePost />
    </div>
  </Provider>

export default App