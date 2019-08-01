import React,{Component} from "react";
import Header from "../../Components/HeaderLandingPage/Header";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import FeedBack from '../../Components/FeedBack/FeedBack';
import Slideshow from "../../Components/Slider/Slider";


class LandingPage extends Component{
  
  
    render(){
  return(
 <div>
      <Header {...this.props}/> 
      <Slideshow/>
      <Services/>
      <FeedBack/>
      <Footer/>

 </div>




  )}}
export default LandingPage;