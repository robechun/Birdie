import React, { Component } from 'react'

import axios from 'axios';
import {Redirect} from 'react-router-dom'
import NavBar from './../NavBar/NavBar';
import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import {Button, Grid, Header, Form, Image, Segment, Input, Container, List} from 'semantic-ui-react'
import Footer from "../Footer/Footer";

class Register extends Component {

    constructor(){
        super();
        this.state = {
            res : <div/>,
            vfName: "",
            vlName: "",
            vphoneNum: "",
            vemail: "",
            vpass: "",
            vusername: "",
        }

        this.handleNewUser = this.handleNewUser.bind(this);
    }

    handleNewUser(){
        let vfName = "error" , vlName = "error", vphoneNum = "error", vemail = "error", vpass = "error", vusername = "error";
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

        if(user.firstName !== ""){
            vfName = "";
        }
        if(user.lastName !== ""){
            vlName = "";
        }
        if(user.phoneNumber !== "" && !isNaN(user.phoneNumber)){
            vphoneNum = "";
        }
        if(user.email !== "" && user.email.includes(".") && user.email.includes("@") && user.email.length >= 5){
            vemail = "";
        }
        if(user.password.length > 4 && user.password === user.matchingPassword){
            vpass = "";
        }
        if(user.username !== ""){
            vusername = "";
        }

        if(vfName !== "error" && vlName !== "error" && vphoneNum !== "error" && vemail !== "error" && vpass !== "error" && vusername !== "error"){
            const queryURL = "http://159.65.72.45:8080/signup";
        //if(document.getElementById("pass").value === document.getElementById("re-pass").value) {
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
                    res : <p className="error">User Already Exists</p>
                });
            });
        }
        else{
            console.log("Password entered not re-entered correctly");
            this.setState({
                vfName: vfName,
                vlName: vlName,
                vphoneNum: vphoneNum,
                vemail: vemail,
                vpass: vpass,
                vusername: vusername
            });
        }
    }

    render(){
        return (

            <div className="full blackout">
                <div className='registerForm-form'>
                    <NavBar/>
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
                                        error = {this.state.vfName}
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='First Name'
                                        id = "fName"
                                    />
                                    <Form.Input
                                        error = {this.state.vlName}
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Last Name'
                                        id = "lName"
                                    />
                                    <Form.Input
                                        error = {this.state.vusername}
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Username'
                                        id = "userName"
                                    />

                                    <Form.Input
                                        error = {this.state.vphoneNum}
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Phone Number'
                                        id = "phoneNum"
                                    />
                                    <Form.Input
                                        error = {this.state.vemail}
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='E-mail address'
                                        id = "email"
                                    />
                                    <Form.Input
                                        error = {this.state.vpass}
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        id = "pass"
                                    />
                                    <Form.Input
                                        error = {this.state.vpass}
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
                <Footer/>
            </div>
        )
    }
}


//export default connect(null, {newToken})(Register);
export default Register;