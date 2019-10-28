import React, { Component } from 'react';
import { RoomContext } from '../context';

class FeaturedRooms extends Component {
  state = {};
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms)
    return (
      <div></div>
    );
  }
}

export default FeaturedRooms;