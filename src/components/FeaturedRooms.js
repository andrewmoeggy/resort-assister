import React, { Component } from 'react';
import { RoomContext } from '../context';

class FeaturedRooms extends Component {
  state = {};
  static contextType = RoomContext;

  render() {
    const { name, greeting } = this.context;
    return (
      <div>{greeting} Featuered ROoms {name}</div>
    );
  }
}

export default FeaturedRooms;