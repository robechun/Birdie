import React, { Component } from 'react'

import axios from 'axios';

import NavBar from './../NavBar/NavBar';

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

    //Example payload:
    // {
    //   "firstName":"fname",
    //   "lastName": "lname",
    //   "phoneNumber": 1231231230,
    //   "email": "garbage@garbage.com",
    //   "password":"password",
    //   "role":"USER",
    //   "username":"username",
    //   "isAccountNonLocked":true,
    //   "isAccountNonExpired":true,
    //   "isCredentialNonExpired": true,
    //   "isEnabled": true
    // }

    handleNewUser(){
        //e.preventDefault();
        const queryURL = "http://localhost:8080/signup";
        if(document.getElementById("pass").value === document.getElementById("re-pass").value) {
            const user = {
                firstName: document.getElementById("fName").value,
                lastName: document.getElementById("lName").value,
                phoneNumber: document.getElementById("phoneNum").value,
                email: document.getElementById("email").value,
                password: document.getElementById("pass").value,
                matchingPassword: document.getElementById("re-pass").value,
                role: "USER",
                username: document.getElementById("userName").value,
                isAccountNonLocked: true,
                isAccountNonExpired: true,
                isCredentialNonExpired: true,
                isEnabled: true
            };

            // {
            //     "firstName":"Raf",
            //     "lastName": "Valdez",
            //     "phoneNumber": 1231231230,
            //     "email": "garbage1@garbage.com",
            //     "password":"password",
            //     "matchingPassword": "password",
            //     "role":"USER",
            //     "username":"raaaaf",
            //     "isAccountNonLocked":true,
            //     "isAccountNonExpired":true,
            //     "isCredentialNonExpired": true,
            //     "isEnabled": true
            // }
            console.log(JSON.stringify(user));
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
        else{
            console.log("Password entered not re-entered correctly");
        }
    }

    render(){
        return (
            <div className='registerForm-form'>
                {
                    /*notes*/
                }
                <div>
                    <NavBar/>
                </div>
                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                      height: 100%;
                    }
                  `}
                </style>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center-left'>
                            <Image src='/logo.png' />
                            {' '}Create New Account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='First Name'
                                    id = "fName"
                                />
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Last Name'
                                    id = "lName"
                                />
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Username'
                                    id = "userName"
                                />

                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Phone Number'
                                    id = "phoneNum"
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
                                    id = "pass"
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Confirm Password'
                                    type='password'
                                    id = "re-pass"
                                />

                                <Button color='black' fluid size='large' onClick={this.handleNewUser}>Create Account</Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}


export default LoginForm;
