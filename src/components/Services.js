import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './TItle';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: 'Free Cocktails',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta.'
        },
        {
          icon: <FaHiking />,
          title: 'Great Hiking',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta.'
        },
        {
          icon: <FaShuttleVan />,
          title: 'Shuttle Van',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta.'
        },
        {
          icon: <FaBeer />,
          title: 'Delicious Beer',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta.'
        }
      ]
    }
  }
  render() {
    return (
      <section className="services">
        <Title title='services' />
        <div className="services-center">
          {this.state.services.map((item, i) => {
            return <article key={i} className='service'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    );
  }
}

export default Services;