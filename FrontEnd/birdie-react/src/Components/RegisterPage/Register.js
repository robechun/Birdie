import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';

import NavBar from './../NavBar/NavBar';

import axios from 'axios'
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

class LoginForm extends Component {
  handleLogin(){
         const queryURL = "http://localhost:8080/register"
         console.log("Kill Me, kill me now");
         let user = {
              firstname: document.getElementById("firstname").value,
              lastname: document. getElementById("lastname").value,
             username: document.getElementById("username").value,
             phonenumber: document.getElementById("phonenumber").value,
             email: document.getElementById("email").value, 
             password: document.getElementById("password").value

         };
         console.log(user);
         axios({
             method: 'post',
             url: queryURL,
             data: user,
             headers: {'Content-Type': 'application/json'},
         }).then((response) => {
             console.log(response);
         }).catch((error) => {
             console.log(error);
         });

}

render() {
  return (

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
          {' '}Create New Acccount
        </Header>
        <Form size='large'>
          <Segment stacked>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='First Name'
            id = "firstname"
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Last Name'
            id = "lastname"
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Username'
            id = "username"
          />

          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Phone Number'
            id = "phonenumber"
          />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              id = "email"
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              id = "password"
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              id = "password"
            />

            <Button color='black' fluid size='large' onClick={this.handleLogin}><NavLink exact to={'/'}/>Create Account</Button>
             </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)
}
}
export default LoginForm;