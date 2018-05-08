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
  Dropdown,
} from 'semantic-ui-react'

const coinOptions = [
  'BTC', 'LTC', 'NEO', 'ETH', 'TRX', 'NANO',
]

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey',
]

const panes = [
  { menuItem: 'Limit', render: () => 
  
	<Tab.Pane attached={false} >	
		<Grid divided='vertically'>
			<Grid.Row columns={2}>	
				<Grid.Column>
					<b>Buy BTC</b><br></br>    
					BTC Balance: 0.00000000<br>
					</br><br></br>					
					Price:&emsp;&emsp;<Input focus placeholder='Enter price...' />							
					<br></br><br></br>
					Amount:&emsp;<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
					<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group>
					<br></br><br></br>
					Total:&emsp;&emsp;<Input focus placeholder='Total...' />
					<br></br><br></br>		
					<Button color='green'>Buy BTC</Button>
					</Grid.Column>
					
					<Grid.Column>
					<b>Sell BTC</b><br></br>    
					BTC Balance: 0.00000000<br>
					</br><br></br>
					Price:&emsp;&emsp;<Input focus placeholder='Enter price...' />
					<br></br><br></br>
					Amount:&emsp;<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
					<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group>
					<br></br><br></br>
					Total:&emsp;<Input focus placeholder='Total...' />
					<br></br><br></br>		
					<Button color='red'>Sell BTC</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Tab.Pane> 

  },
  
  { menuItem: 'Market', render: () => 
  
	<Tab.Pane attached={false}>
		<Grid divided='vertically'>
			<Grid.Row columns={2}>		
				<Grid.Column>
					<b>Buy BTC</b><br></br>    
					BTC Balance: 0.00000000<br>
					</br><br></br>
					Price:&emsp;&emsp;<Input disabled placeholder='Market price...' />
					<br></br><br></br>
					Amount:&emsp;<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
					<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group>
					<br></br><br></br>
					<Button color='green'>Buy BTC</Button>		
					</Grid.Column>
					
					<Grid.Column>
					<b>Sell BTC</b><br></br>    
					BTC Balance: 0.00000000<br>
					</br><br></br>
					Price:&emsp;&emsp;<Input disabled placeholder='Market price...' />
					<br></br><br></br>
					Amount:&emsp;<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
					<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group>
					<br></br><br></br>	
					<Button color='red'>Sell BTC</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Tab.Pane>  
  },
  
  { menuItem: 'Stop-Limit', render: () => 
	<Tab.Pane attached={false}>
		<Grid divided='vertically'>
			<Grid.Row columns={2}>	
				<Grid.Column>	
					<b>Buy BTC</b><br></br>    
					BTC Balance: 0.00000000<br>
					</br><br></br>
					Stop:&emsp;&emsp;<Input focus placeholder='Enter price...' />
					<br></br><br></br>
					Limit:&emsp;&emsp;<Input focus placeholder='Enter price...' />	
					<br></br><br></br>
					Amount:&emsp;<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
					<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group>
					<br></br><br></br>
					Total:&emsp;<Input focus placeholder='Total...' />
					<br></br><br></br>		
					<Button color='green'>Buy BTC</Button>
					</Grid.Column>
					
					<Grid.Column>
					<b>Sell BTC</b><br></br>    
					BTC Balance: 0.00000000<br>
					</br><br></br>
					Stop:&emsp;&emsp;<Input focus placeholder='Enter price...' />
					<br></br><br></br>
					Limit:&emsp;&emsp;<Input focus placeholder='Enter price...' />	
					<br></br><br></br>
					Amount:&emsp;<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
					<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group>
					<br></br><br></br>
					Total:&emsp;&emsp;<Input focus placeholder='Total...' />
					<br></br><br></br>		
					<Button color='red'>Sell BTC</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>	
	</Tab.Pane> 
  },
]

class BuySellSetLimit extends Component {
	state = { color: colors[5], 
			  coin: coinOptions[5]
			}
	handleColorChange = e => this.setState({ color: e.target.value })
	handleCoinChange = e => this.setState({ coin: e.target.value })
	render() {
		const { color, coin } = this.state
		return (
		<div>
			<select onChange={this.handleCoinChange}>
				{_.map(coinOptions, c => <option key={c} value={c}>{_.startCase(c)}</option>)}
			</select>
						
			<Tab				
				menu={{ color, inverted: true, attached: false, tabular: true }}
				panes={panes}
			/>			
		</div>
		)
	}
}

export default BuySellSetLimit;