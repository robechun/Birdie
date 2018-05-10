
import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import {NavLink} from 'react-router-dom';

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


class LoginForm extends Component {
  constructor (props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      }
    }
    handleUserInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
                () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
}

errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}

    handleLogin(){
        const queryURL = "http://localhost:8080/login"
        console.log("Heyo");
        let user = {
            username: document.getElementById("username").value,
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
            <div  className='registerForm-form'>
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
                                    placeholder='username'
                                    id = "username"
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    id = "password"
                                />

                                <Button color='black' text color='white' fluid size='large' onClick={this.handleLogin}><Link to ='/'>Login</Link></Button>
                            </Segment>
                        </Form>
                        <Message>
                            New? <a href="/Register">Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}


export default LoginForm;
