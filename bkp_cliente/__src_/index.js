import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './App'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
// ========================================

// ReactDOM.render(
//     <BrowserRouter>
//         <Switch>
//             <Route path="/" exact={true} component={Game} />
//             <Route path="/sobre" component={Sobre} />
//         </Switch>
//     </BrowserRouter>
//     , document.getElementById("root"))
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route>
                <Menu/>
            </Route>
        </Switch>
    </BrowserRouter>
    , document.getElementById("nav"))
