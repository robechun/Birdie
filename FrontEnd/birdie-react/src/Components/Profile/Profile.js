import React, { Component } from 'react'

import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import NavBar from './../NavBar/NavBar';
import axios from 'axios';
import {Button, Grid, Divider, Segment, Form} from 'semantic-ui-react'


class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
            status : <p/>
        }

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
        let newPassVer = document.getElementById("modifyPassVerify").value;
        if(newPass === newPassVer) {
            const queryURL = "http://159.65.72.45:8080/profile/newPassword"
            //const queryURL = "http://localhost:8080/profile/newPassword"
            axios({
                method: 'put',
                url: queryURL,
                data: newPass,
                headers: {'Content-Type': 'text/plain', 'Authorization': "Bearer " + token},
            }).then((response) => {
                console.log(response);
                console.log("Successful change of password");
                this.setState({
                    status : <p>Successful change of password</p>
                });
            }).catch((error) => {
                this.setState({
                    status : <p>Unable to access User Information</p>
                });
            });
        }
        else{
            this.setState({
                status : <p>The passwords you entered do not match</p>
            });
        }
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
        let secretVer = document.getElementById("secretVerify").value;
        if (secret === secretVer) {
            const queryURL = "http://159.65.72.45:8080/profile/addSecret"
            console.log("secret: |" + secret)
            axios({
                method: 'post',
                url: queryURL,
                data: secret,
                headers: {'Content-Type': 'text/plain', 'Authorization': "Bearer " + token},
            }).then((response) => {
                console.log(response);
                console.log("Secret added Successfully");
                this.setState({
                    status : <p>New Secret Set</p>
                });
            }).catch((error) => {
                console.log(error);
                this.setState({
                    status : <p>Unable to access User Information</p>
                });
            });
        }
        else {
            this.setState({
                status : <p>The Secret You've Entered Do Not Match</p>
            });
        }
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
        let apiKeyVer = document.getElementById("apiKeyVerify").value;
        if(apiKey === apiKeyVer) {
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
                this.setState({
                    status : <p>New API Key Set</p>
                });
            }).catch((error) => {
                console.log(error);
                this.setState({
                    status : <p>Unable to access User Information</p>
                });
            });
        }
        else {
            this.setState({
                status : <p>The API Key You've Entered Do Not Match</p>
            });
        }
    }


    render() {
        return(
            <div className = "blackout full">
                <NavBar/>
                <div className= "half center">
                    <Grid align = 'center'>
                        <Grid.Row columns = {1}>
                            <Grid.Column>
                                <div className = "profileleft">
                                    <Segment>
                                        <h3>
                                            Modify Account Information
                                        </h3>
                                        {this.state.status}
                                        <hr/>
                                        <Form.Input
                                            fluid
                                            placeholder= "Enter New Password"
                                            icon = 'lock'
                                            type='password'
                                            id="modifyPass"/>
                                        <br/>
                                        <Form.Input
                                            fluid
                                            placeholder= "Re-Enter New Password"
                                            icon = 'lock'
                                            type='password'
                                            id="modifyPassVerify"/>
                                        <br/>
                                        <Button  circular color = 'teal' fluid onClick = {this.modifyPass}>Modify Password</Button>
                                        <hr/>
                                        <Divider horizontal></Divider>
                                        <Form.Input
                                            fluid
                                            icon = 'lock'
                                            type='password'
                                            id="apiKey"/>
                                        <br/>
                                        <Form.Input
                                            fluid
                                            icon = 'lock'
                                            type='password'
                                            id="apiKeyVerify"/>
                                        <br/>
                                        <Button circular color = 'teal' fluid onClick={this.addAPIKey}>Add API Key</Button>
                                        <hr/>
                                        <Divider horizontal></Divider>
                                        <Form.Input
                                            fluid
                                            icon = 'lock'
                                            type='password'
                                            id ="secret"/>
                                        <br/>
                                        <Form.Input
                                            fluid
                                            icon = 'lock'
                                            type='password'
                                            id ="secretVerify"/>
                                        <br/>
                                        <Button circular color = 'teal' fluid onClick={this.addSecret}>Add Secret</Button>
                                    </Segment>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>

        )
    }
    }

    const mapStateToProps = state => ({
        accessToken : state.loginRed.accessToken
    });


    export default connect(mapStateToProps, {newToken})(Profile);
