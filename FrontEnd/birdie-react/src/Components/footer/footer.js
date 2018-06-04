import React, { Component } from 'react'
import {Container, Grid, Header, List, Segment} from 'semantic-ui-react'

class Footer extends Component {
  render (){
    return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Learn' />
                            <List link inverted>
                                <List.Item target = "_blank" href= "https://www.binance.com/">Binance</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>Birdie</Header>
                            <p>Secure your financial future. Create an account now!</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
);
}
}

export default Footer;
