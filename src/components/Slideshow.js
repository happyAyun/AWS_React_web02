import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg'
];

const Slideshow = () => {
  return (
        <div className="slide-container">
            <Slide>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${slideImages[0]})`}}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${slideImages[1]})`}}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${slideImages[2]})`}}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
  );
};

export default Slideshow;
