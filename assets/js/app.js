// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
// import "phoenix_html"
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Jumbotron from './components/jumbotron';
import SideMenu from './components/side-menu';
const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/map" component={SideMenu}/>
           <Route path="/" component={Jumbotron}/>
        </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("react-app"));

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
