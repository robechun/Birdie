import React, { Component } from 'react'

import NavBar from './../NavBar/NavBar';
import CoinTable from './CoinTable/CoinTable';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class Profile extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="righttable">
        <CoinTable/>
        </div>
        <div className="usertext">
        <h1>User</h1>
        </div>
        <div className="user">
        <Image
        src='/user.jpg'
        size='medium'
        />
        </div>
      </div>
    )
  }
}

export default Profile;
