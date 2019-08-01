import React from "react";
import "./Services.css";
import a1 from "../../assets/images/a1.jpg";
import a2 from "../../assets/images/a2.jpg"
import a3 from "../../assets/images/a3.jpg"
import a4 from "../../assets/images/a4.jpg"
import a5 from "../../assets/images/a5.jpg"


const Services=()=>{

     return(
        <div class="services" id="services">
		<div class="container">
		<h2 class="tittles-w3agileits"><span style={{color:"#22bcff"}}>S</span>ervices</h2>
			<div class="w3_agile_services_grids">
				
				<div class="col-md-4 w3_agile_services_grid">
					<div class="agile_services_grid" id="smaller-image3">
						<div class="hover06 column">
							<div>
								<figure><img src={a1} alt=" " class="img-responsive" /></figure>
							</div>
						</div>
						<div class="agile_services_grid_pos">
							<i class="fa fa-spinner" aria-hidden="true"></i>
						</div>
					</div>
					<div className="title-para">
					<h4>Custom Dry Cleaning</h4>
					<p class="para-w3-agile">Suspendisse dapibus felis mauris,<br/> id efficitur lacus tincidunt id.</p>
					</div>
				</div>
				<div class="col-md-4 w3_agile_services_grid">
					<div class="agile_services_grid" id="smaller-image2">
						<div class="hover06 column">
							<div>
								<figure><img src={a3} alt=" " class="img-responsive" /></figure>
							</div>
						</div>
						<div class="agile_services_grid_pos">
							<i class="fa fa-shirtsinbulk i1" aria-hidden="true"></i>
						</div>
					</div>
					<div className="title-para">
					<h4>Finest Shirt service</h4>
					<p class="para-w3-agile">Suspendisse dapibus felis mauris,<br/> id efficitur lacus tincidunt id.</p>
			    </div>
				</div>
				<div class="col-md-4 w3_agile_services_grid">
					<div class="agile_services_grid" id="smaller-image">
						<div class="hover06 column">
							<div>
								<figure><img src={a2} alt=" " class="img-responsive" /></figure>
							</div>
						</div>
						<div class="agile_services_grid_pos">
							<i class="fa fa-users i1" aria-hidden="true"></i>
						</div>
					</div>
					<div className="title-para">
					<h4>Friendly customer service</h4>
					<p class="para-w3-agile">Suspendisse dapibus felis mauris,<br/> id efficitur lacus tincidunt id.</p>
				</div>
				</div>
				<div class="col-md-6 w3_agile_services_grid">
					<div class="agile_services_grid" id="bigger-image2">
						<div class="hover06 column">
							<div>
								<figure><img src={a4} alt=" " class="img-responsive" /></figure>
							</div>
						</div>
						<div class="agile_services_grid_pos">
							<i class="fa fa-magic" aria-hidden="true"></i>
						</div>
					</div>
					<div className="title-para">
					<h4>Wash & Fold Laundry Service</h4>
					<p class="para-w3-agile">Duis libero mi, accumsan eu elementum in,<br/> tempus quis tortor. Mauris a iaculis dolor. Nunc sagittis,<br/> metus vitae blandit fermentum</p>
				</div>
				</div>
				<div class="col-md-6 w3_agile_services_grid">
					<div class="agile_services_grid" id="bigger-image">
						<div class="hover06 column">
							<div>
								<figure><img src={a5} alt=" " class="img-responsive" /></figure>
							</div>
						</div>
						<div class="agile_services_grid_pos">
							<i class="fa fa-gift" aria-hidden="true"></i>
						</div>
					</div>
					<div className="title-para">
					<h4>Delivery at the DoorStep!</h4>
					<p class="para-w3-agile">Duis libero mi, accumsan eu elementum in,<br/> tempus quis tortor. Mauris a iaculis dolor. <br/>Nunc sagittis, metus vitae blandit fermentum</p>
			    </div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>




     )



  }
  




export default Services;