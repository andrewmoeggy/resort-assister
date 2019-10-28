import React, { Component } from 'react';
import Hero from '../components/Hero';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Hero>
        <div>Single Room</div>
      </Hero>
    );
  }
}

export default SingleRoom;