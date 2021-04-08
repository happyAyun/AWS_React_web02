import React from 'react';
import Chart from './Chart';
import Slideshow from './Slideshow';
import Editor from './Markdown/Editor';

const Main = () => {
  return (
        <div>
            <Chart />
           <Slideshow/>
            <Editor />
        </div>
  );
};

export default Main;
