import React, { Component } from 'react'

import axios from 'axios';
import {Redirect} from 'react-router-dom'
import NavBar from './../NavBar/NavBar';
import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import {Button, Grid, Header, Form, Image, Segment, Container, List} from 'semantic-ui-react'

class Register extends Component {

    constructor(){
        super();
        this.state = {
            res : <div/>
        }

        this.handleNewUser = this.handleNewUser.bind(this);
    }

    handleNewUser(){
        //e.preventDefault();
        const queryURL = "http://159.65.72.45:8080/signup";
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
                console.log("success");
                let loginCred = {
                    username: document.getElementById("userName").value,
                    password: document.getElementById("pass").value
                };

                //this.props.newToken(loginCred);

                this.setState({
                    //res : <Redirect to="/"/>
                    res: <Redirect to="/login"/>
                })
            }).catch((error) => {
                this.setState({
                    res : <p>Something went wrong...check your inputs again</p>
                });
            });
        }
        else{
            console.log("Password entered not re-entered correctly");
        }
    }

    render(){
        return (

            <div className="full blackout">
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
                                    {this.state.res}
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </div>

            <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Learn' />
                            <List link inverted>
                                <List.Item as='a'>Binance</List.Item>
                                <List.Item as='a'>Investing in Crypto</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>Birdie</Header>
                            <p>Secure your financial future. Create an account now.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
            </div>
        )
    }
}


//export default connect(null, {newToken})(Register);
export default Register;