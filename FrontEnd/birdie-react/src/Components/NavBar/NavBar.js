import {NavLink} from 'react-router-dom'
import React, { Component } from 'react'

import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

import {Button, Container, Menu, Responsive, Segment, Visibility,} from 'semantic-ui-react'

class NavBar extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    logoutHandler(){
        console.log("Logging user out");
        window.location.reload();
    }

    render() {
        const { children } = this.props
        const { fixed } = this.state

        let token = "";
        try {
            token = this.props.accessToken.data.accessToken
        }
        catch (exception){
            // do nothing
        }

        if(token != ""){
            return (
                <Responsive {...Responsive.onlyComputer}>
                    <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                        <Segment inverted textAlign='center'>
                            <Menu
                                fixed={fixed ? 'top' : null}
                                inverted={!fixed}
                                pointing={!fixed}
                                secondary={!fixed}
                                size='medium'
                            >
                                <Container>
                                    <Menu.Item as='a'>
                                        <NavLink exact to={'/'}>
                                            <p>Home</p>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item as='a'>
                                        <NavLink exact to={'/watchlist'}>
                                            <p>Watchlist</p>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item as='a'>
                                        <NavLink exact to={'/wallet'}>
                                            <p>Wallet</p>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item as='a'>
                                        <NavLink exact to={'/profile'}>
                                            <p>Profile</p>
                                        </NavLink>
                                    </Menu.Item>

                                    <Menu.Item as='a'>
                                        <NavLink exact to={'/trade'}>
                                            <p>Trade</p>
                                        </NavLink>
                                    </Menu.Item>

                                    <Menu.Item position='right'>
                                        <Button onClick={this.logoutHandler} as='a' inverted={!fixed}>Log Out</Button>
                                        {/*<NavLink exact to={'/register'}>*/}
                                            {/*<Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>*/}
                                        {/*</NavLink>*/}
                                    </Menu.Item>
                                </Container>
                            </Menu>
                        </Segment>
                    </Visibility>

                    {children}
                </Responsive>
            )
        }


        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment inverted textAlign='center'>
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='medium'
                        >
                            <Container>
                                <Menu.Item as='a'>
                                    <NavLink exact to={'/'}>
                                        <p>Home</p>
                                    </NavLink>
                                </Menu.Item>
                                {/*<Menu.Item as='a'>*/}
                                    {/*<NavLink exact to={'/watchlist'}>*/}
                                        {/*<p>Watchlist</p>*/}
                                    {/*</NavLink>*/}
                                {/*</Menu.Item>*/}
                                {/*<Menu.Item as='a'>*/}
                                    {/*<NavLink exact to={'/wallet'}>*/}
                                        {/*<p>Wallet</p>*/}
                                    {/*</NavLink>*/}
                                {/*</Menu.Item>*/}
                                {/*<Menu.Item as='a'>*/}
                                    {/*<NavLink exact to={'/profile'}>*/}
                                        {/*<p>Profile</p>*/}
                                    {/*</NavLink>*/}
                                {/*</Menu.Item>*/}

                                {/*<Menu.Item as='a'>*/}
                                    {/*<NavLink exact to={'/trade'}>*/}
                                        {/*<p>Trade</p>*/}
                                    {/*</NavLink>*/}
                                {/*</Menu.Item>*/}

                                <Menu.Item position='right'>
                                    <NavLink exact to={'/login'}>
                                        <Button as='a' inverted={!fixed}>Log in</Button>
                                    </NavLink>
                                    <NavLink exact to={'/register'}>
                                        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                    </NavLink>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});


export default connect(mapStateToProps, {newToken})(NavBar);
