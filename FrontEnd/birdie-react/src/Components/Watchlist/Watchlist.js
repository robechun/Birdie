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

class Watchlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.coins = [];         
  }
  
	componentDidMount() {
		const queryURL = "http://localhost:8080/watchlist/add"
		axios({
            method: 'get',
            url: queryURL,
            data: this.state.coins,
            headers: {'Content-Type': 'application/json'},
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
	}
  
  
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  
  handleRowDel(coin) {
    let index = this.state.coins.indexOf(coin);
    this.state.coins.splice(index, 1);
    this.setState(this.state.coins);
  };

  handleAddEvent(evt) {
    let id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    let coin = {
      id: id,
      name: "",
      note: ""     
    }
    this.state.coins.push(coin);
    this.setState(this.state.coins);
  }

  handleWatchlistTable(evt) {
    let item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
	
  let coins = this.state.coins.slice();
  let newCoins = coins.map(function(coin) {

    for (let key in coin) {
      if (key == item.name && coin.id == item.id) {
        coin[key] = item.value;

      }
    }
    return coin;
  });
    this.setState({coins:newCoins});
  };
  render() {

    return (
      <div>
		<NavBar/>
		<br></br><br></br>
		
        <WatchlistTable 
		onCoinTableUpdate={this.handleWatchlistTable.bind(this)} 
		onRowAdd={this.handleAddEvent.bind(this)} 
		onRowDel={this.handleRowDel.bind(this)} 
		coins={this.state.coins} 
		filterText={this.state.filterText}
		/>
		
      </div>
    );

  }

}
export default Watchlist;

class WatchlistTable extends React.Component {

  render() {
    let onCoinTableUpdate = this.props.onCoinTableUpdate;
    let rowDel = this.props.onRowDel;
    let filterText = this.props.filterText;
    let coin = this.props.coins.map(function(coin) {
      if (coin.name.indexOf(filterText) === -1) {
        return;
      }
      return (
		  <CoinRow 
		  onCoinTableUpdate={onCoinTableUpdate} 
		  coin={coin} 
		  onDelEvent={rowDel.bind(this)} 
		  key={coin.id}
		  />
	  )
    });
    return (
      <div>

      
	  
<Grid divided='vertically'>
    <Grid.Row columns={2}>
		
		<Grid.Column width="5">
		</Grid.Column>
		
		<Grid.Column width="5">	 
		
			<Button color="green"	   
		    onClick={this.props.onRowAdd}>Add
		    </Button>
		    	  
			<Table celled color="teal" inverted>
			  <Table.Header>
				<Table.Row>
				  <Table.HeaderCell>Coin Name</Table.HeaderCell>
				  <Table.HeaderCell>Note</Table.HeaderCell>
				  <Table.HeaderCell></Table.HeaderCell>
				</Table.Row>
			  </Table.Header>
				  
				
			  <Table.Body>
					{coin}				  	
			  </Table.Body>
			</Table>
		</Grid.Column>		
		
	</Grid.Row>
</Grid>
      </div>
    );

  }

}

class CoinRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.coin);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell 
			onCoinTableUpdate={this.props.onCoinTableUpdate} 
			cellData={{
			  "type": "name",
			  value: this.props.coin.name,
			  id: this.props.coin.id
			}}
		/>
		<EditableCell 
		onCoinTableUpdate={this.props.onCoinTableUpdate} 
			cellData={{
			  "type": "note",
			  value: this.props.coin.note,
			  id: this.props.coin.id
			}}
		/>
        <td className="del-cell">
		
        <Button 
		negative 
		onClick={this.onDelEvent.bind(this)}>Remove
		</Button>	  		  
		  
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <Input 
		name={this.props.cellData.type} 
		id={this.props.cellData.id} 
		value={this.props.cellData.value} 
		onChange={this.props.onCoinTableUpdate}
		/>
      </td>
    );

  }

}


