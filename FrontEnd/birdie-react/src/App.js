import './App.css';

import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import MainLandingPage from "./Components/LandingPage/MainLandingPage";
import Login from "./Components/Login/Login"
import Profile from "./Components/Profile/Profile";
import Wallet from "./Components/Wallet/Wallet";
import Watchlist from "./Components/Watchlist/Watchlist";
import Register from "./Components/RegisterPage/Register";
import Trade from "./Components/Trade/Trade";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MainLandingPage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/wallet' component={Wallet}/>
            <Route exact path='/watchlist' component={Watchlist}/>
            <Route exact path='/trade' component={Trade}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
