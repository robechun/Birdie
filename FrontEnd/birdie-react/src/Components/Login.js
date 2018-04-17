
import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';

import NavBar from './../NavBar/NavBar';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
  <div className='login-form'>
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

            <Button color='pink' fluid size='large'>Login</Button>
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
