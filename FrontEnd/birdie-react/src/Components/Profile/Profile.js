import React, { Component } from 'react'

import NavBar from './../NavBar/NavBar';
import axios from 'axios';
import {Button, Input} from 'semantic-ui-react'

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
            <div>
                <NavBar/>
                <div className="usertext">
                    <h1>User</h1>
                </div>
                <Button onClick = {this.modifyPass}>Modify Password</Button>
                <Input id="modifyPass"/>
                <hr/>
                <Button onClick={this.addAPIKey}>Add API Key</Button>
                <Input id="apiKey"/>
                <hr/>
                <Button onClick={this.addSecret}>Add Secret</Button>
                <Input id ="secret"/>

            </div>
        )
    }
}

export default Profile;
