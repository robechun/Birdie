
import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './../NavBar/NavBar';
import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import {Redirect} from 'react-router-dom'
import {Button, Grid, Header, Form, Image, Message, Segment, Container, List} from 'semantic-ui-react'


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

export default connect(null, {newToken})(LoginForm);
