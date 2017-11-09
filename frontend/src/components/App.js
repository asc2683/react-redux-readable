import React from 'react'
import { Provider } from 'react-redux'

import ConnectedPostList from '../containers/ConnectedPostList'
import ConnectedLoading from '../containers/ConnectedLoading'

const App = ({ store }) =>
  <Provider store={store}>
    <div>
      <ConnectedLoading />
      <ConnectedPostList />
    </div>
  </Provider>

export default App