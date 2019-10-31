import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
// import FeaturedRooms from '../components/FeaturedRooms';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="rooms">
        <Link to='/' className='btn-primary'>Return Home</Link>
        {/* <FeaturedRooms /> */}
      </Banner>
    </Hero>
  );
}

export default Rooms;