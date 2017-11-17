import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from '../store/middleware'
import MainPage from './MainPage'
import PostDetail from './PostDetail'
import ConnectedPostDetail from '../containers/ConnectedPostDetail'
import ConnectedEditPost from '../containers/ConnectedEditPost'
// import ConnectedLoading from '../containers/ConnectedLoading'

const App = ({ store }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/post/:id" component={ConnectedPostDetail} />
        <Route exact path="/post/:id/edit" component={ConnectedEditPost} />  
        </Switch>      
    </ConnectedRouter>
  </Provider>

export default App