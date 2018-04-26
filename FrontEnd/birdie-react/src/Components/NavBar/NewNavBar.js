import React, { Component } from 'react';

import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
        <div>
            <Menu color='pink' borderless inverted>
                <Menu.Menu>
                    <Menu.Item>
                        <NavLink exact to={'/'} activeStyle={{color : "black", textDecoration: "none"}}>
                            <p>Home</p>
                        </NavLink>
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu>
                    <Menu.Item>
                        <NavLink exact to={'/wallet'} activeStyle={{color : "black", textDecoration: "none"}}>
                            <p>Wallet</p>
                        </NavLink>
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu>
                    <Menu.Item>
                        <NavLink exact to={'/watchlist'} activeStyle={{color : "black", textDecoration: "none"}}>
                            <p>Watchlist</p>
                        </NavLink>
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <NavLink exact to={'/login'} activeStyle={{color : "black", textDecoration: "none"}}>
                            <p>Login</p>
                        </NavLink>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
        )
    }
}

export default NavBar;
