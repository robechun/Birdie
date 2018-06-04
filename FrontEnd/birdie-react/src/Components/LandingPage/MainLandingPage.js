import NavBar from './../NavBar/NavBar';
import LandingPageChartThree from '../LandingPageChart/LandingPageChartThree';
import React, { Component } from 'react'

import {Button, Grid, Header, Image, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";

const AboutBirdie = () => (
    <div>
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

        <Footer/>
    </div>
)


class MainLandingPage extends Component {
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
                    <Button primary size='large' href = "/login">
                        <div className="centerize">
                            Get Started
                        </div>
                    </Button>
                </div>
                <div className="whiteout">
                    <hr/>
                    <AboutBirdie/>
                </div>
            </div>
        );
    }
}
export default MainLandingPage;
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