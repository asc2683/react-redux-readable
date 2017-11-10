import React from 'react'
import { Provider } from 'react-redux'

import ConnectedPostList from '../containers/ConnectedPostList'
import ConnectedLoading from '../containers/ConnectedLoading'
import ConnectedFilterList from '../containers/ConnectedFilterList'

const App = ({ store }) =>
  <Provider store={store}>
    <div>
      <ConnectedLoading />
      <ConnectedFilterList />
      <ConnectedPostList />
    </div>
  </Provider>

export default App