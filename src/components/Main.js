import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player';

const Main = () => {
  return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                width='100%'
                height='100%'
                url='https://www.youtube.com/watch?v=z-1o8EP0i1o' playing controls/>
        </div>
  );
};

export default Main;
