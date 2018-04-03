import React, { Component } from 'react'

import NavBar from './../NavBar/NavBar';
import AboutBirdie from './AboutBirdie/AboutBirdie';
import LandingPageChart from './LandingPageChart/LandingPageChart';
import CoinTable from './CoinTable/CoinTable';

class MainLandingPage extends Component {
  render() {
    return (
      <div className="centerize">
        <NavBar/>
        <AboutBirdie/>
        <LandingPageChart/>
        <CoinTable/>
      </div>
    )
  }
}

export default MainLandingPage;
