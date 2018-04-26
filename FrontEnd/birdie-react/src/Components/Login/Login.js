
import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';

import NavBar from './../NavBar/NavBar';
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Form,
  Image,
  Message,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


/*class LoginForm extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <h1>Hello Login</h1>
      </div>
    )
  }
}*/



const HomepageHeading = ({ mobile }) => (
  <Container text>
    <div className='login-form'>
      {
        /*notes*/
      }

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
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='black' fluid size='large'>Login</Button>
               </Segment>
          </Form>
          <Message>
            New? <a href="/Register">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  </Container>


)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center'>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
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
                {/*<Menu.Item as='a'>Careers</Menu.Item> */}
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
            <HomepageHeading />
            </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
const HomepageLayout = () => (
  <ResponsiveContainer>

  </ResponsiveContainer>
)
export default HomepageLayout
{/*export default LoginForm; */}
