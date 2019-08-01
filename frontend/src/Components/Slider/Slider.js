import React from 'react';
import { Zoom } from 'react-slideshow-image';
import "./Slider.css";
 import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';



 
const zoomOutProperties = {
  duration: "3000",
  transitionDuration: "400",
  infinite: true,
  indicators: false,
  scale: "0.4",
  arrows: false
}
 
const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
     <img src={img1} alt="slide1"/>
     <img src={img2} alt="slide2"/>
     <img src={img3} alt="slide3"/>
     <img src={img4} alt="slide4"/>
      
      </Zoom>
    )
}
export default Slideshow;