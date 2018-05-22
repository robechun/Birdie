import NavBar from './../NavBar/NavBar';
import LandingPageChartThree from '../LandingPageChart/LandingPageChartThree';

import BuySellSetLimit from './../Trade/BuySellSetLimit/BuySellSetLimit';
/*
class MainLandingPage extends Component {
  render() {
    return (
      <div className="centerize">
        <NavBar/>
        <AboutBirdie/>
        <LandingPageChart/>
        <CoinTable/>
      </div>
    )
  }
}
export default MainLandingPage; */
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Birdie'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: 0//{/*mobile ? '1.5em' : '3em',*/}
            }}
        />
        <Header
            as='h2'
            content='Invest'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: 1
            }}
        />

        <div classname = "centerize">
            <LandingPageChartThree/>
            <br></br>
        </div>

        <Button primary size='huge'>
            <NavLink exact to={'/login'}>
                Get Started
            </NavLink>
            <Icon name='right arrow' />
        </Button>
    </Container>


)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 *
 *
 * This NavBar can become responsive through overwriting the semantic UI code. The redundancy of having so many navbars
 * DEFEATS the purpose of using React. Let's aim to write code cleanly and effectively as opposed to just copying
 * components over and over again. Use props and state to manage the components as opposed to changing one or two lines
 * repetitively. -Raf
 *
 *
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <div>
                <div className="blackout">
                    <NavBar/>
                    <HomepageHeading />
                </div>
                {children}
            </div>
        //     <Responsive {...Responsive.onlyComputer}>
        //         <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
        //             <Segment inverted textAlign='center'>
        //                 <Menu
        //                     fixed={fixed ? 'top' : null}
        //                     inverted={!fixed}
        //                     pointing={!fixed}
        //                     secondary={!fixed}
        //                     size='medium'
        //                 >
        //                     <Container>
        //                         <Menu.Item as='a' active>
        //                             <NavLink exact to={'/'}>
        //                                 <p>Home</p>
        //                             </NavLink>
        //                         </Menu.Item>
        //                         <Menu.Item as='a'>
        //                             <NavLink exact to={'/watchlist'}>
        //                                 <p>Watchlist</p>
        //                             </NavLink>
        //                         </Menu.Item>
        //                         <Menu.Item as='a'>
        //                             <NavLink exact to={'/wallet'}>
        //                                 <p>Wallet</p>
        //                             </NavLink>
        //                         </Menu.Item>
        //                         <Menu.Item as='a'>
        //                             <NavLink exact to={'/profile'}>
        //                                 <p>Profile</p>
        //                             </NavLink>
        //                         </Menu.Item>
        //                         <Menu.Item position='right'>
        //                             <NavLink exact to={'/login'}>
        //                                 <Button as='a' inverted={!fixed}>Log in</Button>
        //                             </NavLink>
        //                             <NavLink exact to={'/register'}>
        //                                 <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        //                             </NavLink>
        //                         </Menu.Item>
        //                     </Container>
        //                 </Menu>
        //                 <HomepageHeading />
        //             </Segment>
        //         </Visibility>
        //
        //         {children}
        //     </Responsive>
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
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>We Make Investing in Cryptocurreny Easy</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            With our safe and efficient website
                        </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>Invest with confidence</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Everything is encrypted
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image
                            bordered
                            rounded
                            size='large'
                            src='/crypto.jpg'
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Currencies</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        {/*  <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"Stuff"</Header>
            <p style={{ fontSize: '1.33em' }}>Stuff</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"Stuff"</Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='' />
              <b>Nan</b> Stuff
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>How to Invest</Header>
                <p style={{ fontSize: '1.33em' }}>
                    Investing in crytocurrencies can be hard and confusing, but here at Birdie we
                    have put together a comprehensive guide on how to get started.
                </p>
                <Button as='a' size='large'>Read More</Button>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    {/*<a href='#'>Case Studies</a> */}
                </Divider>
                <Header as='h3' style={{ fontSize: '2em' }}>Blockchain</Header>
                <p style={{ fontSize: '1.33em' }}>
                    Blockchain is the tech of the future
                </p>
                <Button as='a' size='large'>Learn More</Button>
            </Container>
        </Segment>
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
    </ResponsiveContainer>
)
export default HomepageLayout


// import React, { Component } from 'react'
//
// import NavBar from './../NavBar/NavBar';
// import AboutBirdie from './AboutBirdie/AboutBirdie';
// import LandingPageChart from '../LandingPageChart/LandingPageChart';
// import CoinTable from '../Watchlist/WatchlistCoinTable/WatchlistCoinTable';
//
// class MainLandingPage extends Component {
//     constructor(){
//         super();
//         this.state = {
//             redirect : false
//         }
//     }
//     render() {
//         //Checks if redirection has occurred
//         if(this.props.location.state !== undefined) {
//             console.log("MainLandingPage accessToken: |" + this.props.location.state.accessToken)
//             return (
//                 <div className="blackout centerize">
//                     <NavBar accessToken = {this.props.location.state.accessToken}/>
//                     <AboutBirdie/>
//                     <LandingPageChart/>
//                     {/*<WalletCoinTable/>*/}
//                 </div>
//             );
//         }
//         else {
//             console.log("No Access Token as User has not Logged in")
//             return (
//                 <div className="blackout centerize">
//                     <NavBar/>
//                     <AboutBirdie/>
//                     <LandingPageChart/>
//                     {/*<WalletCoinTable/>*/}
//                 </div>
//             )
//         }
//     }
// }
//
// export default MainLandingPage;
//
// // import {NavLink} from 'react-router-dom';
// // import PropTypes from 'prop-types'
// // import React, { Component } from 'react'
// // import {
// //   Button,
// //   Container,
// //   Divider,
// //   Grid,
// //   Header,
// //   Icon,
// //   Image,
// //   List,
// //   Menu,
// //   Responsive,
// //   Segment,
// //   Sidebar,
// //   Visibility,
// // } from 'semantic-ui-react'
//
// /* eslint-disable react/no-multi-comp */
// /* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
//  * such things.
//  */
// // const HomepageHeading = ({ mobile }) => (
// //   <Container text>
// //     <Header
// //       as='h1'
// //       content='Birdie'
// //       inverted
// //       style={{
// //         fontSize: mobile ? '2em' : '4em',
// //         fontWeight: 'normal',
// //         marginBottom: 0,
// //         marginTop: 0//{/*mobile ? '1.5em' : '3em',*/}
// //       }}
// //    />
// //     <Header
// //       as='h2'
// //       content='Invest'
// //       inverted
// //       style={{
// //         fontSize: mobile ? '1.5em' : '1.7em',
// //         fontWeight: 'normal',
// //         marginTop: 1
// //       }}
// //     />
// // <div classname = "centerize">
// //     <LandingPageChart/>
// //     <WalletCoinTable/>
// //     </div>
// //     <Button primary size='huge'>
// //     <NavLink exact to={'/login'}>
// //       Get Started
// //       </NavLink>
// //       <Icon name='right arrow' />
// //     </Button>
// //   </Container>
// //
// //
// // )
// //
// // HomepageHeading.propTypes = {
// //   mobile: PropTypes.bool,
// // }
// //
// // /* Heads up!
// //  * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
// //  * It can be more complicated, but you can create really flexible markup.
// //  */
// // class DesktopContainer extends Component {
// //   state = {}
// //
// //   hideFixedMenu = () => this.setState({ fixed: false })
// //   showFixedMenu = () => this.setState({ fixed: true })
// //
// //   render() {
// //     const { children } = this.props
// //     const { fixed } = this.state
// //
// //     return (
// //       <Responsive {...Responsive.onlyComputer}>
// //         <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
// //           <Segment inverted textAlign='center'>
// //             <Menu
// //               fixed={fixed ? 'top' : null}
// //               inverted={!fixed}
// //               pointing={!fixed}
// //               secondary={!fixed}
// //               size='medium'
// //             >
// //               <Container>
// //                 <Menu.Item as='a' active>
// //                 <NavLink exact to={'/'}>
// //                     <p>Home</p>
// //                 </NavLink>
// //                 </Menu.Item>
// //                 <Menu.Item as='a'>
// //                 <NavLink exact to={'/watchlist'}>
// //                     <p>Watchlist</p>
// //                 </NavLink>
// //                 </Menu.Item>
// //                 <Menu.Item as='a'>
// //                 <NavLink exact to={'/wallet'}>
// //                     <p>Wallet</p>
// //                 </NavLink>
// //                 </Menu.Item>
// //                 <Menu.Item as='a'>
// //                 <NavLink exact to={'/profile'}>
// //                     <p>Profile</p>
// //                 </NavLink>
// //                 </Menu.Item>
// //                 <Menu.Item position='right'>
// //                 <NavLink exact to={'/login'}>
// //                   <Button as='a' inverted={!fixed}>Log in</Button>
// //                   </NavLink>
// //                   <NavLink exact to={'/register'}>
// //                   <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
// //                   </NavLink>
// //                 </Menu.Item>
// //               </Container>
// //             </Menu>
// //             <HomepageHeading />
// //             </Segment>
// //         </Visibility>
// //
// //         {children}
// //       </Responsive>
// //     )
// //   }
// // }
// //
// // DesktopContainer.propTypes = {
// //   children: PropTypes.node,
// // }
// //
// //
// //
// //
// // const ResponsiveContainer = ({ children }) => (
// //   <div>
// //     <DesktopContainer>{children}</DesktopContainer>
// //   </div>
// // )
// //
// // ResponsiveContainer.propTypes = {
// //   children: PropTypes.node,
// // }
// //
// // const HomepageLayout = () => (
// //   <ResponsiveContainer>
// //       <Segment style={{ padding: '8em 0em' }} vertical>
// //       <Grid container stackable verticalAlign='middle'>
// //         <Grid.Row>
// //           <Grid.Column width={8}>
// //             <Header as='h3' style={{ fontSize: '2em' }}>We Make Investing in Cryptocurreny Easy</Header>
// //             <p style={{ fontSize: '1.33em' }}>
// //               With our safe and efficent website
// //             </p>
// //             <Header as='h3' style={{ fontSize: '2em' }}>Invest with confidence</Header>
// //             <p style={{ fontSize: '1.33em' }}>
// //             Everthing is encryted
// //             </p>
// //           </Grid.Column>
// //           <Grid.Column floated='right' width={6}>
// //             <Image
// //               bordered
// //               rounded
// //               size='large'
// //               src='/crypto.jpg'
// //             />
// //           </Grid.Column>
// //         </Grid.Row>
// //         <Grid.Row>
// //           <Grid.Column textAlign='center'>
// //             <Button size='huge'>Currencies</Button>
// //           </Grid.Column>
// //         </Grid.Row>
// //       </Grid>
// //     </Segment>
// //   {/*  <Segment style={{ padding: '0em' }} vertical>
// //       <Grid celled='internally' columns='equal' stackable>
// //         <Grid.Row textAlign='center'>
// //           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
// //             <Header as='h3' style={{ fontSize: '2em' }}>"Stuff"</Header>
// //             <p style={{ fontSize: '1.33em' }}>Stuff</p>
// //           </Grid.Column>
// //           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
// //             <Header as='h3' style={{ fontSize: '2em' }}>"Stuff"</Header>
// //             <p style={{ fontSize: '1.33em' }}>
// //               <Image avatar src='' />
// //               <b>Nan</b> Stuff
// //             </p>
// //           </Grid.Column>
// //         </Grid.Row>
// //       </Grid>
// //     </Segment> */}
// //     <Segment style={{ padding: '8em 0em' }} vertical>
// //       <Container text>
// //         <Header as='h3' style={{ fontSize: '2em' }}>How to Invest</Header>
// //         <p style={{ fontSize: '1.33em' }}>
// //           Investing in crytocurrencies can be hard and confusing, but here at Birdie we
// //           have put together a comprehensize guide on how to get started.
// //         </p>
// //         <Button as='a' size='large'>Read More</Button>
// //         <Divider
// //           as='h4'
// //           className='header'
// //           horizontal
// //           style={{ margin: '3em 0em', textTransform: 'uppercase' }}
// //         >
// //           {/*<a href='#'>Case Studies</a> */}
// //         </Divider>
// //         <Header as='h3' style={{ fontSize: '2em' }}>Blockchain</Header>
// //         <p style={{ fontSize: '1.33em' }}>
// //           Blockchain is the tech of the future
// //         </p>
// //         <Button as='a' size='large'>Learn More</Button>
// //       </Container>
// //     </Segment>
// //     <Segment inverted vertical style={{ padding: '5em 0em' }}>
// //       <Container>
// //         <Grid divided inverted stackable>
// //           <Grid.Row>
// //             <Grid.Column width={3}>
// //               <Header inverted as='h4' content='About' />
// //               <List link inverted>
// //                 <List.Item as='a'>Sitemap</List.Item>
// //                 <List.Item as='a'>Contact Us</List.Item>
// //               </List>
// //             </Grid.Column>
// //             <Grid.Column width={3}>
// //               <Header inverted as='h4' content='Learn' />
// //               <List link inverted>
// //                 <List.Item as='a'>Binance</List.Item>
// //                 <List.Item as='a'>Investing in Crypto</List.Item>
// //                 <List.Item as='a'>How To Access</List.Item>
// //               </List>
// //             </Grid.Column>
// //             <Grid.Column width={7}>
// //               <Header as='h4' inverted>Birdie</Header>
// //               <p>Secure your financial future. Create an account now.</p>
// //             </Grid.Column>
// //           </Grid.Row>
// //         </Grid>
// //       </Container>
// //     </Segment>
// //   </ResponsiveContainer>
// // )
// // export default HomepageLayout
