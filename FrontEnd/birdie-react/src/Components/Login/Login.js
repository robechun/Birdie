
import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';
{/*add*/}
import NavBar from './../NavBar/NavBar';
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Form,
  Image,
  Message,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


/*class LoginForm extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <h1>Hello Login</h1>
      </div>
    )
  }
}*/
const LoginForm = () => (
  <div className='registerForm-form'>
    {
      /*notes*/
    }
    <div>
      <NavBar/>
      </div>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
<Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center-left'>
            <Image src='/logo.png' />
            {' '}Log-in to your Account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='black' fluid size='large'>Login</Button>
               </Segment>
          </Form>
          <Message>
            New? <a href="/Register">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>


)



export default LoginForm;
