import React  from "react"
import { Fade } from 'react-slideshow-image';
import imagt1 from '../../assets/images/t1.jpg';
import imagt2 from '../../assets/images/t2.jpg';
import imagt3 from '../../assets/images/t3.jpg';
import "./FeedBack.css";
import imagt4 from '../../assets/images/t4.jpg';

const fadeProperties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows:false,
	onChange: (oldIndex, newIndex) => {
	  console.log(`fade transition from ${oldIndex} to ${newIndex}`);
	}
  }

const FeedBack=()=>{
return(
	<div>
		<div className="testimonials">
			<h1><span style={{color:"#22bcff"}}>T</span>estimonials</h1>
		</div>
	<Fade id="fade-left" style={{width:"70%"}} {...fadeProperties}>
	<div className="each-fade">
	  <div className="image-container">
		<img className="image-slides" src={imagt1} />
	  </div>
	  <div className="div-left" >
	  <div class="col-md-8 test-grid1">
										<p class="para-w3-agile"><i class="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
										Lorem ipsum dolor .</p>
										<div class="test-info-w3ls">
											<h4>Stella Franklin</h4>
											<span>Lorem Ipsum</span>
										</div>
									</div>	
	  </div>
	</div>
	<div className="each-fade">
	  <div className="image-container">
		<img src={imagt2} className="image-slides" />
	  </div>
	  <div className="div-left" >
	  <div class="col-md-8 test-grid1">
										<p className="para-w3-agile"><i class="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
										Lorem ipsum dolor .</p>
										<div className="test-info-w3ls">
											<h4>Tim Mathis</h4>
											<span>Lorem Ipsum</span>
										</div>
									</div>	
	  </div>
	</div>
	<div className="each-fade">
	  <div className="image-container">
		<img src={imagt3} className="image-slides"/>
	  </div>
	  <div className="div-left" >
	  <div class="col-md-8 test-grid1">
										<p class="para-w3-agile"><i class="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
										Lorem ipsum dolor .</p>
										<div class="test-info-w3ls">
											<h4>Stella Franklin</h4>
											<span>Lorem Ipsum</span>
										</div>
									</div>	
	  </div>
	</div>
	<div className="each-fade">
	  <div className="image-container">
		<img className="image-slides" src={imagt4} />
	  </div>
	  <div className="div-left" >
	  <div class="col-md-8 test-grid1">
										<p class="para-w3-agile"><i class="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
										Lorem ipsum dolor .</p>
										<div class="test-info-w3ls">
											<h4>Shirak Shirak</h4>
											<span>Lorem Ipsum</span>
										</div>
									</div>	
	  </div>
	</div>
  </Fade>
  </div>
	
)



}
export default FeedBack;

