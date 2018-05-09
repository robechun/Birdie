import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import CoinTable from './CoinTable/CoinTable';
import LandingPageChart from './LandingPageChart/LandingPageChart'
import BuySellSetLimit from './../BuySellSetLimit/BuySellSetLimit';
import axios from 'axios';

import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  List,
  Menu,
  Table,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class NavBar extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

render() {
  const { children } = this.props
  const { fixed } = this.state

  return (
    <Responsive {...Responsive.onlyComputer}>
      <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
        <Segment inverted textAlign='center'>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='medium'
          >
            <Container>
              <Menu.Item as='a'>
              <NavLink exact to={'/'}>
                  <p>Home</p>
              </NavLink>
              </Menu.Item>
              <Menu.Item as='a' active>
              <NavLink exact to={'/watchlist'}>
                  <p>Watchlist</p>
              </NavLink>
              </Menu.Item>
              <Menu.Item as='a'>
              <NavLink exact to={'/wallet'}>
                  <p>Wallet</p>
              </NavLink>
              </Menu.Item>
              <Menu.Item as='a'>
              <NavLink exact to={'/profile'}>
                  <p>Profile</p>
              </NavLink>
              </Menu.Item>
              <Menu.Item position='right'>
              <NavLink exact to={'/login'}>
                <Button as='a' inverted={!fixed}>Log in</Button>
                </NavLink>
                <NavLink exact to={'/register'}>
                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </NavLink>
              </Menu.Item>
            </Container>
          </Menu>
          </Segment>
      </Visibility>

      {children}
    </Responsive>
  )
}
}

class Watchlist extends Component {
constructor(props) {
        super(props);
        this.state = {
            watchCoins: []      
        };
    }
	
	componentDidMount() {
		const queryURL = "http://localhost:3000/watchlist"
		axios({
            method: 'get',
            url: queryURL,
            data: this.state.watchCoins,
            headers: {'Content-Type': 'application/json'},
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
	}
	
  render() {
    return (
		<div>
			<NavBar/>
			<br></br>			
			<Grid divided='vertically'>
				<Grid.Row columns={3}>
					<Grid.Column width={1}>
					</Grid.Column>						
					<Grid.Column width={5}>		
						<Table
						celled
						color="blue" inverted
						>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell >Watch Coin</Table.HeaderCell>								
								</Table.Row>
							</Table.Header>

							<Table.Body>
								<Table.Row>
								
									<Table.Cell>									
										{ this.state.watchCoins.map(watchCoin => {watchCoin.asset}) }									
									</Table.Cell>

								</Table.Row>
							</Table.Body>  
						</Table>
					</Grid.Column>		
				</Grid.Row>
			</Grid>
		</div>
    )
  }
} 
export default Watchlist;


