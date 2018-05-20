import React, { Component } from 'react'

import NavBarProfile from './../NavBar/NavBarProfile';
import axios from 'axios';
import Card1 from './usercard'
import {Button, Form, Input, Divider, Segment, Rail, Grid, Card, Image, Icon, Container, Header, List} from 'semantic-ui-react'

class Profile extends Component {

    modifyPass(){
        let newPass = document.getElementById("modifyPass").value;
        const queryURL = "http://localhost:8080/profile/newPassword"
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NjA1OTgsImV4cCI6MTUyNjU2NTM5OH0.3opRvaitjj9jY7p5hyi56iRjX4lNLjcsKqWsuNZAnJ5HBA1bYtiquWe9s1eoo01LiIt1wdcRyWi7asusbuUxnA"
        axios({
            method: 'put',
            url: queryURL,
            data: newPass,
            headers: {'Content-Type': 'text/plain', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
            console.log("Successful change of password");
        }).catch((error) => {
            console.log(error);
        });
    }

    addAPIKey(){
        let apiKey = document.getElementById("apiKey").value;
        const queryURL = "http://localhost:8080/profile/addApiKey"
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NjA1OTgsImV4cCI6MTUyNjU2NTM5OH0.3opRvaitjj9jY7p5hyi56iRjX4lNLjcsKqWsuNZAnJ5HBA1bYtiquWe9s1eoo01LiIt1wdcRyWi7asusbuUxnA"
        console.log("apikey: |" + apiKey)
        axios({
            method: 'post',
            url: queryURL,
            data: apiKey,
            headers: {'Content-Type': 'text/plain', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
            console.log("Api key added Successfully");
        }).catch((error) => {
            console.log(error);
        });
    }

    addSecret(){
        let secret = document.getElementById("secret").value;
        const queryURL = "http://localhost:8080/profile/addSecret"
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1YWYzZjM1ZTVlYjE5NzEwMGNhNDQ3OGUiLCJpYXQiOjE1MjU5NjA1OTgsImV4cCI6MTUyNjU2NTM5OH0.3opRvaitjj9jY7p5hyi56iRjX4lNLjcsKqWsuNZAnJ5HBA1bYtiquWe9s1eoo01LiIt1wdcRyWi7asusbuUxnA"
        console.log("secret: |" + secret)
        axios({
            method: 'post',
            url: queryURL,
            data: secret,
            headers: {'Content-Type': 'text/plain', 'Authorization': "Bearer " + token},
        }).then((response) => {
            console.log(response);
            console.log("Secret added Successfully");
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className = "blackout">
                <NavBarProfile/>

                <Grid align = 'center'>
                <Grid.Row columns = {2}>
                <Grid.Column>
                <div className = "profileleft">
                <Segment>
                <h3>
                Modify Account Information
                </h3>
                <Form.Input
                fluid
                icon = 'lock'

                id="modifyPass"/>
                <br></br>
                <Button color = 'teal' fluid onClick = {this.modifyPass}>Modify Password</Button>
                <hr/>
                <Divider horizontal></Divider>
                <Form.Input
                fluid
                icon = 'lock'

                id="apiKey"/>
                <br></br>
                <Button color = 'teal' fluid onClick={this.addAPIKey}>Add API Key</Button>
                <hr/>
                <Divider horizontal></Divider>
                <Form.Input
                fluid
                icon = 'lock'

                id ="secret"/>
                <br></br>
                <Button color = 'teal' fluid onClick={this.addSecret}>Add Secret</Button>
                </Segment>
                </div>
                </Grid.Column>
                <Grid.Column>
                  <Card1/>
                </Grid.Column>
                </Grid.Row>
                </Grid>
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
                                <Header as='h4' inverted>Profile Page</Header>
                                <p>Change your password. Add an api key. Add a secret question</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
              </Segment>
            </div>
        )
    }
}

export default Profile;
