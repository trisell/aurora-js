import React, { Component } from 'react';


import TopMenu from '../menu/menu';
import renderSystem from '../../lib/renderSystem';
import './map.scss';

let seconds = 1;
const height = 1080;
const width = 1920;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  componentDidMount() {
    renderSystem(height, width, document.getElementById('solarSystem').getContext('2d'));
  }
  componentDidUpdate(){
  }

  renderSS(){
    renderSystem(height, width,  document.getElementById('solarSystem').getContext('2d'));
  }
  /*
  automateSS() {
    setInterval(this.animateSS(), 100);
  }

  animateSS()  {

    var ss = document.getElementById('solarSystem') 
    var  ssContext  =  ss.getContext('2d');
    

    const centerW = window.innerWidth / 2;
    const centerH = window.innerHeight / 2;
    // Clear the canvas and draw the background ssContext.clearRect(0, 0, 450, 400);
    ssContext.fillStyle = "#2F1D92";
    ssContext.fillRect(0,  0,  window.innerWidth,  window.innerHeight);
    
    
    ssContext.save();
    
    
    // Draw the sun 
    ssContext.translate(centerW, centerH);
    ssContext.fillStyle  =  "yellow";
    ssContext.strokeStyle = "red";
    ssContext.font = "14px Georgia";
    ssContext.strokeText("Sun", -12, 25 );
    ssContext.beginPath();
    ssContext.arc(0, 0, 15, 0, Math.PI * 2, true);
    ssContext.fill();
    
    
    // Draw  the  earth  orbit 
    ssContext.strokeStyle   =   "black"; 
    ssContext.beginPath();
    
    ssContext.arc(0, 0, 150, 0, Math.PI * 2); 
    ssContext.stroke();
    
    ssContext.strokeStyle   =   "black"; 
    ssContext.beginPath();
    
    ssContext.arc(0, 0, 250, 0, Math.PI * 2); 
    ssContext.stroke();

    // Compute the current time in seconds (use the milliseconds


    // to  allow  for  fractional  parts). 
    var now = 1;
    console.log(now);

    //var seconds = ((now.getSeconds() * 1000) + now.getMilliseconds()) / 1000;
    
    console.log(seconds);
    
    //---------------------------------------------

    // Earth

    //---------------------------------------------
    anglePerSecond = 0.5 * ((Math.PI * 2) / 60);
    ssContext.rotate(anglePerSecond * seconds);
    //ssContext.translate(190, 0);
    ssContext.fillStyle =  "green"; 
    ssContext.beginPath();
    ssContext.strokeStyle = "red";
    ssContext.font = "14px Georgia";
    ssContext.strokeText("Mars", -15, 22 );
    ssContext.arc(250, 0, 250, , Math.PI * 2, true);
    ssContext.fill();
    // Rotate the context once every 60 seconds 
    var anglePerSecond = ((Math.PI * 2) / 60);
    ssContext.rotate(anglePerSecond * seconds);
    ssContext.translate(150,  0);


    // Draw the earth 
    ssContext.fillStyle =  "green"; 
    ssContext.beginPath();
    ssContext.strokeStyle = "red";
    ssContext.font = "14px Georgia";
    ssContext.strokeText("Earth", -15, 22 );
    ssContext.arc(0, 0, 10, 0, Math.PI * 2, true);
    ssContext.fill();

    //---------------------------------------------
    // Moon
    //---------------------------------------------
    // Rotate the context 12 times for every earth revolution
    anglePerSecond = 12 * ((Math.PI * 2) / 60);
    ssContext.rotate(anglePerSecond * seconds);
    ssContext.translate(0,  35);


    // draw the moon 
    ssContext.fillStyle   =   "white";
    ssContext.beginPath();
    ssContext.arc(0, 0, 5, 0, Math.PI * 2, true); 
    ssContext.fill();
    ssContext.restore();
  
    seconds++  
    
}
*/

  render() {
    //const width = window.innerWidth;
    //const height = window.innerHeight;
    
    return (
      <div >
        <button onClick={this.renderSS}>1 Day</button>
        <canvas id="solarSystem" width={width} height={height}></canvas>
      </div>
    );
  }
}

export default TopMenu(Map);