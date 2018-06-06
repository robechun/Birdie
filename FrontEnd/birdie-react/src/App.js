import './App.css';

import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import MainLandingPage from "./Components/LandingPage/MainLandingPage";
import Login from "./Components/Login/Login"
import Profile from "./Components/Profile/Profile";
import Wallet from "./Components/Wallet/Wallet";
import Watchlist from "./Components/Watchlist/Watchlist";
import Register from "./Components/RegisterPage/Register";
import Trade from "./Components/Trade/Trade";
import usermanual from "./Components/usermanual/usermanual";

import Store from './Store';
//const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
    render() {
        return (
            <Provider store ={Store}>
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
                            <Route exact path ='/usermanual' component={usermanual}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
