import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom'
import Game from './Game'
import Sobre from './Sobre'

const routes = [
  {
    path: "/game",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: <div>home</div>,
    component: Game,
  },
  {
    path: "/sobre",
    sidebar: () => <div>sobre</div>,
    main: <div>sobre</div>,
    component: Sobre,
  },
  {
    path: "/teste",
    sidebar: () => <div>vazio</div>,
    main: () => <div>VAZIO</div>

  },
]
export default class Menu extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <OldSchoolMenuLink to="/" label="Home" activeOnlyWhenExact={true}/>
          </li>
          <li>
            <OldSchoolMenuLink to="/game" label="Game"/>
          </li>
          <li>
            <OldSchoolMenuLink to="/sobre" label="Sobre"/>
          </li>
          <li>
            <OldSchoolMenuLink to="/teste" label="Testes"/>
          </li>
        </ul>

        <Switch>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              main={route.component}
            />
          ))}
        </Switch>
        <hr />
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    )
  }
}
function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}