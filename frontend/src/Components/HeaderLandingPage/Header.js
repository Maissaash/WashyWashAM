import React, { Component } from "react";
import "./Header.css";
import Logo from "../../assets/images/Logo.png";
import FormPage from "../Login/Login";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header-hh" style={{ backgroundImage: this.props.name }}>
          <div id="demo-1" data-zs-overlay="dots">
            <div className="demo-inner-content">
              <div className="header-w3-agileits" id="home">
                <div className="w3-header-bottom">
                  <div className="container">
                    <img className="Logo" src={Logo} alt="logo" />
                    <h1 className="title-header">
                      <a href="index.html">
                        <span id="letter1" className="letter">
                          W
                        </span>
                        ashy
                        <span className="letter" id="letter2">
                          W
                        </span>
                        ash
                      </a>
                    </h1>

                    <div className="header-w3-top">
                      <div className="agileinfo-phone">
                        <div className="phone-wthree-left">
                          <i
                            className="fa fa-volume-control-phone"
                            aria-hidden="true"
                          />
                          <p>
                            Want a Launder...? <span>call us now!</span>
                          </p>
                        </div>
                        <h2> +0 123 456 789</h2>
                      </div>
                    </div>
                    <div className="top-nav">
                     
                        <ul className="nav navbar-nav">
                          <li>
                           
                            <NavLink   exact to="/">
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <AnchorLink href="#services">Services</AnchorLink>
                          </li>

                          <li>
                            <NavLink to="/contact">Contact</NavLink>
                          </li>
                        </ul>
                        <div className="clearfix"> </div>
                      
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
                <div className="agile-baner-info-w3ls">
                  {/* <h3>We Offer Quality Dry Cleaning at Competitive Prices <span></span></h3> */}
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <a className="button" href="#popup1">
              Log In
            </a>
          </div>

          <div id="popup1" className="overlay">
            <div className="popup">
              <a className="close" href="#">
                &times;
              </a>
              <FormPage {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
