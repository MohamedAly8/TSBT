import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import network from "../images/5g.jpg";
import eSIM from "../images/eSIM.jpg";
import agriculture from "../images/agriculture.jpg";
import smartcity from "../images/smart-city.jpg";
import edgecompute from "../images/edge-compute.jpg";



function Cards() {
  return (
    <div className='cards'>
      <h1>What Keeps Us Busy</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src={smartcity}
              text='TELUS Smart Cities'
              /*label='Adventure'*/
              path='/services'
            />

            <CardItem
            
              src={edgecompute}
              text='Multi Access Edge Computing Solutions'
              /*label='Adventure'*/
              path='/services'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src={agriculture}
              text='TELUS Smart Agriculture'
              /*label='Adventure'*/
              path='/services'
            />
            <CardItem
              src={network}
              text='5G Architecture and Deployment'
              /*label='Adventure'*/
              path='/products'
            />
            <CardItem
              src={eSIM}
              text='eSIM (Embedded SIM)'
              /*label='Adventure'*/
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;