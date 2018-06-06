import NavBar from './../NavBar/NavBar';
import LandingPageChartThree from '../LandingPageChart/LandingPageChartThree';
import React, { Component } from 'react'




const HomepageHeading = ({ mobile }) => (
    <div className="landingPageTitle">

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

        <div className = "landingPageChart">
            <LandingPageChartThree/>
            <br></br>
        </div>

        <Button primary size='huge'>
            <NavLink exact to={'/login'}>
                Get Started
            </NavLink>
            <Icon name='right arrow' />
        </Button>
    </div>
)
  
import {Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility,} from 'semantic-ui-react'
import Footer from "../Footer/Footer";

import {connect} from 'react-redux';
import {newToken} from "../../Actions/loginActions";

const AboutBirdie = () => (
    <div>
        <ResponsiveContainer>
        <Segment style={{padding: '8em 0em'}} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{fontSize: '2em'}}>We Make Investing in Cryptocurreny
                            Easy</Header>
                        <p style={{fontSize: '1.33em'}}>
                            With our application, we integrate your investments with your Binance Account and
                            automate
                            your investments with you in control.
                        </p>
                        <Header as='h3' style={{fontSize: '2em'}}>Invest with confidence</Header>
                        <p style={{fontSize: '1.33em'}}>
                            Given the unsteady market of cryptocurrencies, it is difficult to be able to invest
                            without the
                            high risk of losing money. To mitigate this, Birdie allows users to control their
                            investments
                            without the need to monitor the market 24/7.
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
                        <Button circular size='huge' target="_blank"
                                href="https://www.binance.com/">Binance</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>How to Invest</Header>
                <p style={{ fontSize: '1.33em' }}>
                    Investing in crytocurrencies can be hard and confusing, but here at Birdie we
                    have put together a comprehensive guide on how to get started.
                </p>
                <Button  circular as='a' size='large'><a href = "/usermanual">Read More</a></Button>
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
                <Button as='a' size='large'><a href to="https://blockgeeks.com/guides/what-is-blockchain-technology/">Learn More</a></Button>
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
    </div>
)


class MainLandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            getStarted : <Button primary size='large' href = "/login">Get Started</Button>
        }
    }

    componentWillMount(){
        try {
            if(this.props.accessToken.data.accessToken) {
                this.setState({
                    getStarted: <span/>
                })
            }
        }
        catch (exception){
            //do nothing and keep get started as the button
        }
    }

    render(){
        return(
            <div className="blackout">
                <NavBar/>
                <div className="landingPageTitle">
                    <Header
                        as='h1'
                        content='Birdie'
                        inverted
                    />
                    <Header
                        as='h2'
                        content='Automate Investing'
                        inverted
                    />
                    <div className = "mainLandingChart">
                        <LandingPageChartThree/>
                        <br/>
                    </div>
                    <br/>
                    {this.state.getStarted}
                    {/*<Button primary size='large' href = "/login">*/}
                        {/*<div className="centerize">*/}
                            {/*Get Started*/}
                        {/*</div>*/}
                    {/*</Button>*/}
                </div>
                <div className="whiteout">
                    <hr/>
                    <AboutBirdie/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    accessToken : state.loginRed.accessToken
});

export default connect(mapStateToProps, {newToken})(MainLandingPage);
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