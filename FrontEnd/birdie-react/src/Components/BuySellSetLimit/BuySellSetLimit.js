import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import _ from 'lodash'
import {
  Tab,
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
  Input,
  Form,
} from 'semantic-ui-react'

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey',
]

const panes = [
  { menuItem: 'Limit', render: () => 
  
  <Tab.Pane attached={false} >	
		
		<b>Buy BTC</b><br></br>    
		BTC Balance: 0.00000000<br>
		</br><br></br>
		Price:     <Input focus placeholder='Enter price...' />
		<br></br><br></br>
		Amount:    <Input focus placeholder='Enter amount...' />
		<br></br><br></br>
		<Button.Group >
			<Button>25%</Button>
			<Button>50%</Button>
			<Button>75%</Button>
			<Button>100%</Button>
		</Button.Group>
		<br></br><br></br>
		Total:    <Input focus placeholder='Total...' />
		<br></br><br></br>		
		<Button fluid color='green'>Buy BTC</Button>
		
		<br></br><br></br>
		
		<b>Sell BTC</b><br></br>    
		BTC Balance: 0.00000000<br>
		</br><br></br>
		Price:     <Input focus placeholder='Enter price...' />
		<br></br><br></br>
		Amount:    <Input focus placeholder='Enter amount...' />
		<br></br><br></br>
		<Button.Group >
			<Button>25%</Button>
			<Button>50%</Button>
			<Button>75%</Button>
			<Button>100%</Button>
		</Button.Group>
		<br></br><br></br>
		Total:    <Input focus placeholder='Total...' />
		<br></br><br></br>		
		<Button fluid color='red'>Sell BTC</Button>
		
  </Tab.Pane> 
  
  },
  
  { menuItem: 'Market', render: () => 
  
  <Tab.Pane attached={false}>
  
		<b>Buy BTC</b><br></br>    
		BTC Balance: 0.00000000<br>
		</br><br></br>
		Price:     <Input disabled placeholder='Enter price...' />
		<br></br><br></br>
		Amount:    <Input focus placeholder='Enter amount...' />
		<br></br><br></br>
		<Button.Group >
			<Button>25%</Button>
			<Button>50%</Button>
			<Button>75%</Button>
			<Button>100%</Button>
		</Button.Group>
		<br></br><br></br>
		<Button fluid color='green'>Buy BTC</Button>
		
		<br></br><br></br>
		
		<b>Sell BTC</b><br></br>    
		BTC Balance: 0.00000000<br>
		</br><br></br>
		Price:     <Input disabled placeholder='Market price...' />
		<br></br><br></br>
		Amount:    <Input focus placeholder='Enter amount...' />
		<br></br><br></br>
		<Button.Group >
			<Button>25%</Button>
			<Button>50%</Button>
			<Button>75%</Button>
			<Button>100%</Button>
		</Button.Group>
		<br></br><br></br>	
		<Button fluid color='red'>Sell BTC</Button>
  
  </Tab.Pane> 
  
  },
  
  { menuItem: 'Stop-Limit', render: () => 
  <Tab.Pane attached={false}>
		
		<b>Buy BTC</b><br></br>    
		BTC Balance: 0.00000000<br>
		</br><br></br>
		Stop:     <Input focus placeholder='Enter price...' />
		<br></br><br></br>
		Limit:     <Input focus placeholder='Enter price...' />	
		<br></br><br></br>
		Amount:    <Input focus placeholder='Enter amount...' />
		<br></br><br></br>
		<Button.Group >
			<Button>25%</Button>
			<Button>50%</Button>
			<Button>75%</Button>
			<Button>100%</Button>
		</Button.Group>
		<br></br><br></br>
		Total:    <Input focus placeholder='Total...' />
		<br></br><br></br>		
		<Button fluid color='green'>Buy BTC</Button>
		
		<br></br><br></br>
		
		<b>Sell BTC</b><br></br>    
		BTC Balance: 0.00000000<br>
		</br><br></br>
		Stop:     <Input focus placeholder='Enter price...' />
		<br></br><br></br>
		Limit:     <Input focus placeholder='Enter price...' />	
		<br></br><br></br>
		Amount:    <Input focus placeholder='Enter amount...' />
		<br></br><br></br>
		<Button.Group >
			<Button>25%</Button>
			<Button>50%</Button>
			<Button>75%</Button>
			<Button>100%</Button>
		</Button.Group>
		<br></br><br></br>
		Total:    <Input focus placeholder='Total...' />
		<br></br><br></br>		
		<Button fluid color='red'>Sell BTC</Button>
		
  </Tab.Pane> 
  },
]

class BuySellSetLimit extends Component {
	state = { color: colors[5] }
	handleColorChange = e => this.setState({ color: e.target.value })
	
	render() {
		const { color } = this.state
		return (
		<div>						
			<Tab
				menu={{ color, inverted: true, attached: false, tabular: false }}
				panes={panes}
			/>			
		</div>
		)
	}
}

export default BuySellSetLimit;