import React,{Component} from "react";
import Header from "../../Components/HeaderLandingPage/Header"
import Footer from "../../Components/Footer/Footer";
import backgroundImage from "../../assets/images/inner.jpg"

import "./Contact.css";


class Contact extends Component{
	constructor() {
		super();
		this.state = {
		   backgroundImage:`url(${backgroundImage})`
		  
		};
	  }
 render(){
	
   return(
       <div>
             <Header name={this.state.backgroundImage} />
             <div class="contact">
		<div class="container-contact">
		<div class="col-md-41 wthree_contact_left">
		<h4 class="tittles-contact">Contact <span style={{color:"#22bcff"}}>U</span>s</h4>
			
				<h6>About Us</h6>
				<p class="para-w3-agile">Lorem ipsum <span>Household Laundry</span> dolor sit<br/><br/> amet 
					<span> Dry Cleaning</span> interdum sed aliquet quis.</p>
				<div class="info-img-agileits">
					<div class="info1"></div>
					<div class="info2"></div>
					<div class="info3"></div>
					<div class="clearfix"> </div>
				</div>
				<div className="servicing">
				<h6>Servicing Hours</h6>
				<ul>
					<li><span>Monday-Friday</span> 9:00 am - 10:00 pm </li>
					<li><span>Saturday &amp; Sunday</span> 9:00 am - 12:00 pm</li>
				</ul>
				</div>
			</div>
			<div class="col-md-8 wthree_contact_left">
				<h6>Send us an Email</h6>
				<form action="#" method="post">
						<div class="col-md-6 wthree_contact_left_grid">
							<input type="text" name="Name" placeholder="Name" required=""/>
							<input type="email" name="Email" placeholder="Email" required=""/>
						</div>
						<div class="col-md-6 wthree_contact_left_grid">
							<input type="text" name="Telephone" placeholder="Telephone" required=""/>
							<input type="text" name="Subject" placeholder="Subject" required=""/>
						</div>
						<div class="clearfix"> </div>
						<textarea name="Message" placeholder="Message..." required=""></textarea>
						<input type="submit" value="Submit"/>
						<input type="reset" value="Clear"/>
					</form>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
	<div class="map-agileits">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.22729225444!2d-122.5076400483969!3d37.75763782704338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085878f7a47d775%3A0x340c07c56f992a38!2sBeach+Wash!5e0!3m2!1sen!2sin!4v1499246275767"></iframe>
	</div>
              <Footer />
       </div>



   )



 }




}
export default Contact;