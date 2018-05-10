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
  
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  
  handleRowDel(coin) {
    var index = this.state.coins.indexOf(coin);
    this.state.coins.splice(index, 1);
    this.setState(this.state.coins);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var coin = {
      id: id,
      name: "",
      note: ""     
    }
    this.state.coins.push(coin);
    this.setState(this.state.coins);
  }

  handleWatchlistTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
var coins = this.state.coins.slice();
  var newCoins = coins.map(function(coin) {

    for (var key in coin) {
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
		
        <SearchBar
		filterText={this.state.filterText} 
		onUserInput={this.handleUserInput.bind(this)}
		/>
		
        <WatchlistTable 
		onProductTableUpdate={this.handleWatchlistTable.bind(this)} 
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


class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
        <input type="text" 
		placeholder="Search..." 
		value={this.props.filterText} 
		ref="filterTextInput" 
		onChange={this.handleChange.bind(this)}
		/>
      </div>

    );
  }

}

class WatchlistTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var coin = this.props.coins.map(function(coin) {
      if (coin.name.indexOf(filterText) === -1) {
        return;
      }
      return (
		  <ProductRow 
		  onProductTableUpdate={onProductTableUpdate} 
		  coin={coin} 
		  onDelEvent={rowDel.bind(this)} 
		  key={coin.id}
		  />
	  )
    });
    return (
      <div>

      <button 
	  type="button" 
	  onClick={this.props.onRowAdd} 
	  className="btn btn-success pull-right">Add
	  </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Note</th>              
            </tr>
          </thead>

          <tbody>
            {coin}

          </tbody>

        </table>
      </div>
    );

  }

}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.coin);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell 
			onProductTableUpdate={this.props.onProductTableUpdate} 
			cellData={{
			  "type": "name",
			  value: this.props.coin.name,
			  id: this.props.coin.id
			}}
		/>
		<EditableCell 
		onProductTableUpdate={this.props.onProductTableUpdate} 
			cellData={{
			  "type": "note",
			  value: this.props.coin.note,
			  id: this.props.coin.id
			}}
		/>
        <td className="del-cell">
          <input type="button" 
		  onClick={this.onDelEvent.bind(this)} 
		  value="X" className="del-btn"
		  />
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' 
		name={this.props.cellData.type} 
		id={this.props.cellData.id} 
		value={this.props.cellData.value} 
		onChange={this.props.onProductTableUpdate}
		/>
      </td>
    );

  }

}


