import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
// import FeaturedRooms from '../components/FeaturedRooms';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="rooms">
          <Link to='/' className='btn-primary'>Return Home</Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}

export default Rooms;