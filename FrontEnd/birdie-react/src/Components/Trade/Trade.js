import React, { Component } from 'react'

import CoinTable from './CoinTable/CoinTable';
import LandingPageChart from './LandingPageChart/LandingPageChart'
import NavBar from './../NavBar/NavBar'
import BuySellSetLimit from './BuySellSetLimit/BuySellSetLimit'


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

class Trade extends Component {
    render() {
        return (

            <div>
                <NavBar/>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <BuySellSetLimit/>
                        </Grid.Column>
                        <Grid.Column>
                            <LandingPageChart/>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}

export default Trade;

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

