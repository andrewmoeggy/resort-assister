import React, { Component } from 'react';
import { RoomContext } from '../context';

class FeaturedRooms extends Component {
  state = {};
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms)
    return (
      <div>
        {/* {rooms.map(room => {
          return <h1 style={{ color: 'black' }}>{room.name}</h1>
        })} */}
      </div>
    );
  }
}

export default FeaturedRooms;