import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated, logout } from "./services/auth";
import "./styles/rotas.css"

import Signup from "./pages/Signup"
import Sobre from "./pages/Sobre"
import Login from "./pages/login"
const Sair = () => {
    logout()
    return <Redirect to="/login" />
}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <div className={"main"}>

        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/logout" component={Sair} />
            <PrivateRoute path="/signup" component={ Signup } />
            <PrivateRoute path="/sobre" component={ Sobre } />
            <PrivateRoute path="/" component={() => <h1>tela principal</h1>} />
            <PrivateRoute path="/app" component={() => <h1>App</h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>

    </div>
)



export default Routes;