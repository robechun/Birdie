import React, { Component } from 'react'

import WalletCoinTable from './WalletCoinTable/WalletCoinTable';
import LandingPageChart from './LandingPageChart/LandingPageChart'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'

import {NavLink} from 'react-router-dom'

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

class Wallet extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : []
        }

    }
    componentWillMount(){
        // GET REQUEST ON STANDBY
        const queryURL = "http://localhost:8080/wallet/balance"
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NjA1OTgsImV4cCI6MTUyNjU2NTM5OH0.3opRvaitjj9jY7p5hyi56iRjX4lNLjcsKqWsuNZAnJ5HBA1bYtiquWe9s1eoo01LiIt1wdcRyWi7asusbuUxnA"
        axios({
            method: 'get',
            url: queryURL,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
           // console.log(response.data);
            let tempData = response.data;
            this.setState({
                data: tempData
            });
            //console.log(tempData);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        // console.log("_____________");
        // console.log(this.state.data);
        return (
            <div>
              <NavBar/>
              <div className="righttable">
                <h2>
                  Coin Table
                </h2>
                <WalletCoinTable data={this.state.data}/>
              </div>
              <div className="leftchart">
                <h2>
                  Overall
                </h2>
                <LandingPageChart/>
              </div>
            </div>
        )
    }
}

export default Wallet;

// class NavBar extends Component {
//   state = {}
//
//   hideFixedMenu = () => this.setState({ fixed: false })
//   showFixedMenu = () => this.setState({ fixed: true })
//
// render() {
//   const { children } = this.props
//   const { fixed } = this.state
//
//   return (
//     <Responsive {...Responsive.onlyComputer}>
//       <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
//         <Segment inverted textAlign='center'>
//           <Menu
//             fixed={fixed ? 'top' : null}
//             inverted={!fixed}
//             pointing={!fixed}
//             secondary={!fixed}
//             size='medium'
//           >
//             <Container>
//               <Menu.Item as='a'>
//               <NavLink exact to={'/'}>
//                   <p>Home</p>
//               </NavLink>
//               </Menu.Item>
//               <Menu.Item as='a'>
//               <NavLink exact to={'/watchlist'}>
//                   <p>Watchlist</p>
//               </NavLink>
//               </Menu.Item>
//               <Menu.Item as='a' active>
//               <NavLink exact to={'/wallet'}>
//                   <p>Wallet</p>
//               </NavLink>
//               </Menu.Item>
//               <Menu.Item as='a'>
//               <NavLink exact to={'/profile'}>
//                   <p>Profile</p>
//               </NavLink>
//               </Menu.Item>
//               <Menu.Item position='right'>
//               <NavLink exact to={'/login'}>
//                 <Button as='a' inverted={!fixed}>Log in</Button>
//                 </NavLink>
//                 <NavLink exact to={'/register'}>
//                 <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
//                 </NavLink>
//               </Menu.Item>
//             </Container>
//           </Menu>
//           </Segment>
//       </Visibility>
//
//       {children}
//     </Responsive>
//   )
// }
// }
//

