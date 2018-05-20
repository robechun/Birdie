
import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './../NavBar/NavBar';
import {connect} from 'react-redux';
import {fetchToken} from "../../Actions/loginActions";

import {Redirect} from 'react-router-dom'
import {Button, Grid, Header, Form, Image, Message, Segment} from 'semantic-ui-react'


class LoginForm extends Component {

    constructor(){
        super();
        this.state = {
            redirect : false,
            accessToken : ""
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        const queryURL = "http://localhost:8080/signin"
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };
        //Request to backend to grab a token
        // axios({
        //     method: 'post',
        //     url: queryURL,
        //     data: user,
        //     headers: {'Content-Type': 'application/json'},
        // }).then((response) => {
        //     this.setState({
        //         redirect : true,
        //         accessToken: response.data.accessToken
        //     });
        // }).catch((error) => {
        //     console.log(error);
        // });
        this.props.fetchToken();
    }

    render() {
        let redirect = <div/>
        if(this.state.redirect == true) {
            console.log("Log-in successful!");
            redirect = <Redirect to={{pathname : '/', state : {accessToken : this.state.accessToken, redirect : true}}} />
        }


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

                                <Button color='black' fluid size='large' onClick={this.handleLogin}>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            New? <a href="/Register">Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
                {redirect}
            </div>
        )
    }
}


export default connect(null, {fetchToken})(LoginForm);
