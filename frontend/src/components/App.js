import React from 'react'
import { Provider } from 'react-redux'

import ConnectedPostList from '../containers/ConnectedPostList'

const App = ({ store }) =>
  <Provider store={store}>
    <div>
      <ConnectedPostList />
    </div>
  </Provider>

export default App