import React from 'react';
import Room from './Room';

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms match your search parameters</h3>
      </div>
    )
  } else {
    return (
      <>
        <section className="roomsList">
          <div className="roomslist-center">
            {rooms.map((room, i) => {
              return <Room key={room.id} room={room} />
            })}
          </div>
        </section>
        <footer style={{ padding: '40px' }}></footer>
      </>
    );
  }
}

export default RoomList;