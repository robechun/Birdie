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

class footer extends Component {
  render (){
    return (
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
);
}
}

export default footer;
