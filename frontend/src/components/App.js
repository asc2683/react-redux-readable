import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from '../store/middleware'
import MainPage from './MainPage'
import PostDetail from './PostDetail'
import ConnectedPostDetail from '../containers/ConnectedPostDetail'
import ConnectedLoading from '../containers/ConnectedLoading'

const App = ({ store }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <h1>Readable</h1>
        <ConnectedLoading />
        <hr />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/post/:id" component={ConnectedPostDetail} />        
      </div>
    </ConnectedRouter>
  </Provider>

export default App