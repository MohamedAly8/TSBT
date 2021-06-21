import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import myVideo from "../videos/video-2.mp4";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={myVideo}  autoPlay loop muted />
      <h1>Emerging Tech and IoT</h1>
      <p>Technology Strategy and Business Transformation</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Our Mission <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;