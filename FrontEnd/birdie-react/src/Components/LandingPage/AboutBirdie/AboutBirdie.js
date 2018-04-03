import React, { Component } from 'react';
import {Card, Divider} from 'semantic-ui-react';

class AboutBirdie extends Component {
  render() {
    return (
        <div className="centerize">
            <Card centered>
                <Card.Content header='About Birdie'/>
                <Card.Content description='Hello'/>
            </Card>
            <Divider/>
        </div>
    )
  }
}

export default AboutBirdie;
