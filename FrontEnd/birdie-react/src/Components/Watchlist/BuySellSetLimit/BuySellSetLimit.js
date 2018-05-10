import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import _ from 'lodash'
import DropDownMenu from './DropDownMenu/DropDownMenu'

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

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'black', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey',
]



const panes = [

  { menuItem: 'Limit', render: () =>

	<Tab.Pane attached={false} >
		<Grid divided='vertically'>
			<Grid.Row columns={2} divided>
				<Grid.Column textAlign = 'center'>
          <b>BUY</b><br></br>
					<DropDownMenu/><br></br>
					{/*BTC Balance: 0.00000000<br>*/}
					<br></br>
					{/*Price:&emsp;&emsp;*/}<Input focus placeholder='Enter price...' />
					<br></br><br></br>
					{/*Amount:&emsp;*/}<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
				{/*	<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group> */}
					<br></br><br></br>
					{/*Total:&emsp;&emsp;*/}<Input focus placeholder='Total...' />
					<br></br><br></br>
					<Button fluid color='green'>BUY</Button>
					</Grid.Column>

					<Grid.Column textAlign = 'center'>
          <b>SELL</b><br></br>
					<DropDownMenu/><br></br>
          <br></br>

					{/*Price:&emsp;&emsp;*/}<Input focus placeholder='Enter price...' />
					<br></br><br></br>
					{/*Amount:&emsp;*/}<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
				{/*	<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group> */}
					<br></br><br></br>
					{/*Total:&emsp;*/}<Input focus placeholder='Total...' />
					<br></br><br></br>
					<Button fluid color='red'>SELL</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Tab.Pane>

  },

  { menuItem: 'Market Order', render: () =>

	<Tab.Pane attached={false}>
		<Grid divided='vertically'>
			<Grid.Row columns={2} divided>
				<Grid.Column>
					<b>BUY</b><br></br>
          <DropDownMenu/><br></br>
          <br></br>
					{/*Price:&emsp;&emsp;*/}<Input disabled placeholder='Market price...' />
					<br></br><br></br>
					{/*Amount:&emsp;*/}<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
					<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group>
					<br></br><br></br>
					<Button  fluid color='green'>BUY</Button>
					</Grid.Column>

					<Grid.Column>
          <b>SELL</b><br></br>
					<DropDownMenu/><br></br>
					<br></br>
					{/*Price:&emsp;&emsp;*/}<Input disabled placeholder='Market price...' />
					<br></br><br></br>
					{/*Amount:&emsp;*/}<Input focus placeholder='Enter amount...' />
					<br></br><br></br>
					<Button.Group >
						<Button>25%</Button>
						<Button>50%</Button>
						<Button>75%</Button>
						<Button>100%</Button>
					</Button.Group>
					<br></br><br></br>
					<Button fluid color='red'>SELL</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Tab.Pane>
},

  { menuItem: 'Stop-Limit', render: () =>
	<Tab.Pane attached={false}>
		<Grid divided='vertically'>
			<Grid.Row columns={2} divided>
				<Grid.Column>
					<b>BUY</b><br></br>
          <DropDownMenu/><br></br>
          <br></br>
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
					<Button fluid color='green'>Place Order</Button>
					</Grid.Column>

					<Grid.Column>
					<b>SELL</b><br></br>
          <DropDownMenu/><br></br>
          <br></br>
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
					<Button fluid color='red'>Place Order</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
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
				menu={{ color, inverted: true, attached: false, tabular: true }}
				panes={panes}
			/>
		</div>
		)
	}
}

export default BuySellSetLimit;
