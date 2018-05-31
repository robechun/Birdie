import React, { Component } from 'react'

import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import NavBar from './../NavBar/NavBar';
import axios from 'axios';
import {Button, Input} from 'semantic-ui-react'

class Profile extends Component {

    constructor(props){
        super(props);

        this.modifyPass = this.modifyPass.bind(this);
        this.addAPIKey = this.addAPIKey.bind(this);
        this.addSecret = this.addSecret.bind(this);
    }

    modifyPass(){
        let token = "";
        //console.log(this.props.accessToken);
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        let newPass = document.getElementById("modifyPass").value;
        const queryURL = "http://http://159.65.72.45:3000/:8080/profile/newPassword"
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
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        let apiKey = document.getElementById("apiKey").value;
        const queryURL = "http://159.65.72.45:8080/profile/addApiKey"
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
        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            console.log("User Needs to Login");
        }

        let secret = document.getElementById("secret").value;
        const queryURL = "http://localhost:8080/profile/addSecret"
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
            <div className="full blackout">
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

const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(Profile);
