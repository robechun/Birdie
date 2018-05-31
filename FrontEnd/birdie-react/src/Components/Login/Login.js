
import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './../NavBar/NavBar';
import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import {Redirect} from 'react-router-dom'
import {Button, Grid, Header, Form, Image, Message, Segment} from 'semantic-ui-react'


class LoginForm extends Component {

    constructor(){
        super();
        this.state = {
            redirect : false,
            accessToken : "",
            redirect:<div/>
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };
        //Redux Action
        try {
            this.props.newToken(user);
            this.setState({
                redirect : <Redirect to="/"/>
            })
        }
        catch(e){
            console.log(e);
            console.log("Invalid Login Credentials");
        }
    }

    render() {
        // let redirect = <div/>
        // if(this.state.redirect == true) {
        //     console.log("Log-in successful!");
        //     redirect = <Redirect to={{pathname : '/', state : {accessToken : this.state.accessToken, redirect : true}}} />
        // }


        return (
            <div className="full blackout">
                {this.state.redirect}
                <div className='registerForm-form'>
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

                                    <Button color='black' type='button' fluid size='large' onClick={this.handleLogin}>Login</Button>
                                </Segment>
                            </Form>
                            <Message>
                                New? <a href="/Register">Sign Up</a>
                            </Message>
                        </Grid.Column>
                    </Grid>

                </div>
            </div>
        )
    }
}

export default connect(null, {newToken})(LoginForm);
