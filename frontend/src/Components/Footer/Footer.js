import React from "react";
import Logo from "../../assets/images/Logo.png";
import "./Footer.css";


 const Footer =()=>{
    

      return(
          <div className="footer-ams">
<div class="footer w3layouts">
		<div class="container">
			<div class="footer-row w3layouts-agile">
				<div class="col-md-3 footer-grids w3l-agileits">
                    <div className="logo-title">
                    <img className="logo-image" src={Logo}/>
                    <h6 className="title-footer"><a href="index.html"><span id="letter1" className="letter"  >W</span>ashy<span className="letter" id="letter2">W</span>ash</a>	</h6>
				</div>
                </div>
				<div class="col-md-3 footer-grids w3l-agileits">
					<h3>Address</h3>
					<p>3745 Noriega St,</p>
					<p>San Francisco,</p>
					<p>CA 94122, USA.</p>
				</div>
				<div class="col-md-3 footer-grids w3l-agileits">
					<h3>Connect Us</h3>
					<div class="agileinfo-social-grids">
						<ul>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-rss"></i></a></li>
							<li><a href="#"><i class="fa fa-vk"></i></a></li>
						</ul>
                        <p>+0 123 456 789</p>
					<p><a href="mailto:info@example.com">mail@example.com</a></p>
					</div>
					
					<div class="clearfix"></div>
				</div>
				
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
    <div class="copyright-wthree">
			<div class="container">
				
				<p>© 2019 WashyWash . All Rights Reserved | Design by <a href="http://w3layouts.com/"> AMS </a></p>
			</div>
		</div>

</div>

      )}


export default Footer;