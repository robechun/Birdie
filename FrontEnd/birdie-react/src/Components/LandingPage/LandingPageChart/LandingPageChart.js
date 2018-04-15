import React, { Component } from 'react'

import {Icon, Segment} from 'semantic-ui-react';

class LandingPageChart extends Component {
  render() {
    return (
      <div className="LandingPageChart">
        <Segment loading>
            <div className="centerize">
            <Icon name='line chart' size="large"/>
            </div>
        </Segment>
      </div>
    )
  }
}

export default LandingPageChart;
