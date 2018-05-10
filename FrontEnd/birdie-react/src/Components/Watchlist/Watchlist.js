import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import CoinTable from './CoinTable/CoinTable';
import LandingPageChartTwo from '../LandingPageChart/LandingPageChartTwo'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class Watchlist extends Component {

    //receiving Internal 500 error (message: "the given id must not be null" via postman)
    componentWillMount(){
        const queryURL = "http://localhost:8080/watchlist/"
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NTk5NDEsImV4cCI6MTUyNjU2NDc0MX0.xsr5utc8buRqO16RLQnX9JMP3U9N7l6LOkVrse_ya5JpzSciHeGIYFOmgff863kcYtvYmB8iLWxuWS8pKTihWQ";
        axios({
            method: 'get',
            url: queryURL,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    addWatchlist(){
        const queryURL = "http://localhost:8080/watchlist/add/" //symbol to append
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NTk5NDEsImV4cCI6MTUyNjU2NDc0MX0.xsr5utc8buRqO16RLQnX9JMP3U9N7l6LOkVrse_ya5JpzSciHeGIYFOmgff863kcYtvYmB8iLWxuWS8pKTihWQ";
        axios({
            method: 'post',
            url: queryURL + document.getElementById("watchlistAdd").value,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
           console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    deleteWatchlist(){
        const queryURL = "http://localhost:8080/watchlist/delete/" //symbol to append
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NTk5NDEsImV4cCI6MTUyNjU2NDc0MX0.xsr5utc8buRqO16RLQnX9JMP3U9N7l6LOkVrse_ya5JpzSciHeGIYFOmgff863kcYtvYmB8iLWxuWS8pKTihWQ";
        axios({
            method: 'delete',
            url: queryURL + document.getElementById("watchlistDelete").value,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    clearWatchlist(){
        const queryURL = "http://localhost:8080/watchlist/clear"
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NTk5NDEsImV4cCI6MTUyNjU2NDc0MX0.xsr5utc8buRqO16RLQnX9JMP3U9N7l6LOkVrse_ya5JpzSciHeGIYFOmgff863kcYtvYmB8iLWxuWS8pKTihWQ";
        axios({
            method: 'delete',
            url: queryURL,
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (

            <div className="blackout">
                <NavBar/>
                <div className="left LandingPageChart">
                    <LandingPageChartTwo/>
                </div>

                <div className="right CoinTable">
                    <Button onClick={this.addWatchlist}>Add to Watchlist</Button>
                    <Input id="watchlistAdd"/>

                    <Button onClick={this.deleteWatchlist}>Delete from Watchlist</Button>
                    <Input id="watchlistDelete"/>

                    <Button onClick={this.clearWatchlist}>Clear Watchlist</Button>
                    <Input id="watchlistClear"/>
                    
                    <CoinTable/>
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
