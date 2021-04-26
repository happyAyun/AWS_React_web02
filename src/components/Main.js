import React from 'react';
import '../App.css';
import Slideshow from './Slideshow';
import ReactPlayer from 'react-player';

const Main = () => {
  return (
        <div className='player-wrapper'>
           <Slideshow/>
            <ReactPlayer
                className='react-player'
                width='100%'
                height='100%'
                url='https://www.youtube.com/watch?v=7C2z4GqqS5E' playing controls/>
        </div>
  );
};

export default Main;
