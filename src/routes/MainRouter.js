import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function ParentComponents({ routes }) {
  return routes.map((route, key) => (
    <Route
      key={key}
      exact={route.exact}
      path={route.path}
      render={({ match: { url }}) => <ChildComponents url={url} routes={route.children} />}
    />
  ))
}

function ChildComponents({ routes, url }) {
  if(url === '/') url = '';

  return routes.map((route, key) => (
    <Route
      key={key}
      exact={route.exact}
      path={`${url + route.path}`}
      component={route.component}
    />
  ))
}

function MainRouter({ routes }) {
  return (
    <div>
      <Router>
        <Switch>
          <ParentComponents
            routes={routes}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default MainRouter;
