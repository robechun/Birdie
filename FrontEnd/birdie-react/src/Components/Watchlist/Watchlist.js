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
	state = {
    rows: [{}]
  };
  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    const item = {
      coinName: "",
      coinAmount: "",
	  note: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  
  render() {
    return (	
		<div>
				<NavBar/>
				<br></br>
				<Grid divided='vertically'>
					<Grid.Row columns={2}>
						<Grid.Column>	  
							<div className="container">
							  <div className="row clearfix">
								<div className="col-md-12 column">
								
								  <Table celled
									className="table table-bordered table-hover"
									id="tab_logic"
								  >
								  
									<Table.Header>
									  <Table.Row>
										<Table.HeaderCell className="text-center"> # </Table.HeaderCell>
										<Table.HeaderCell className="text-center"> Coin Name </Table.HeaderCell>
										<Table.HeaderCell className="text-center"> Coin Amount </Table.HeaderCell>
										<Table.HeaderCell className="text-center"> Note </Table.HeaderCell>
									  </Table.Row>
									</Table.Header>
									
									<Table.Body>
									
									  {this.state.rows.map((item, idx) => (
										<Table.Row id="addr0" key={idx}>
										  <td>{idx}</td>
										  
										  <td>
											<Input
											  type="text"
											  name="coinName"
											  value={this.state.rows[idx].coinName}
											  onChange={this.handleChange(idx)}
											  className="form-control"
											/>
										  </td>
										  
										  <td>
											<Input
											  type="text"
											  name="coinAmount"
											  value={this.state.rows[idx].coinAmount}
											  onChange={this.handleChange(idx)}
											  className="form-control"
											/>
										  </td>
										  
										  <td>
											<Input
											  type="text"
											  name="note"
											  value={this.state.rows[idx].note}
											  onChange={this.handleChange(idx)}
											  className="form-control"
											/>
										  </td>
										  
										  
										</Table.Row>
									  ))}
									  
									</Table.Body>
								  </Table>
								  
								  <Button onClick={this.handleAddRow} className="btn btn-primary">
									Add Row
								  </Button>
								  
								  <Button
									onClick={this.handleRemoveRow}
									className="btn btn-danger float-right"
								  >
									Delete Row
								  </Button>
								  
								</div>
							  </div>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
		</div>
    );
  }	
}

export default Watchlist;
