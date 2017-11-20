import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from '../store/middleware'
import ConnectedPostDetail from '../containers/ConnectedPostDetail'
import ConnectedEditPost from '../containers/ConnectedEditPost'
import ConnectedPostList from '../containers/ConnectedPostList'
import FilterList from '../containers/ConnectedFilterList'

const App = ({ store }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <h1>React Redux Readable</h1>
        <FilterList /><hr />
        <Switch>
          <Route exact path="/" component={ConnectedPostList} />
          <Route exact path="/:path" component={ConnectedPostList} />
          <Route exact path="/:category/:id" component={ConnectedPostDetail} />
          <Route exact path="/post/:id/edit" component={ConnectedEditPost} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>

export default App