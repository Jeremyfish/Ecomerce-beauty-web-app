import React, { Component } from 'react';
import {
  BrowserRouter as Router , 
  Switch , 
  Route
} from "react-router-dom"

import Navbar from "./navigation/nav-bar";
import About from "./pages/about";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Portfolio from './pages/portfolio';
import NoMatch from './pages/no-match';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />

<Switch>

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/booking" component={Booking} />
    <Route component={NoMatch} />

  </Switch>
      </div>
    );
  }
}
