import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import WatchlistCoinTable from './WatchlistCoinTable/WatchlistCoinTable';
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class Watchlist extends Component {

    render() {
        // if(this.props.location.state !== undefined){
        //     console.log("Watchlist Access Token: |" + this.props.location.state);
        // }
        // else{
        //     console.log("No Watchlist Access Token Found: |");
        // }
        return (

            <div className="blackout">
                <NavBar/>
                <div className="left LandingPageChart">
                    <LandingPageChartTwo/>
                </div>

                <div className="right CoinTable">
                    <WatchlistCoinTable/>
                </div>
            </div>
        )
    }
}

export default Watchlist;

// class NavBar extends Component {
//   state = {}
//
//   hideFixedMenu = () => this.setState({ fixed: false })
//   showFixedMenu = () => this.setState({ fixed: true })
//on
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
//               <Menu.Item as='a' active>
//               <NavLink exact to={'/watchlist'}>
//                   <p>Watchlist</p>
//               </NavLink>
//               </Menu.Item>
//               <Menu.Item as='a'>
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
