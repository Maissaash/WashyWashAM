import React, { Component } from 'react';
import LandingPage from "./Pages/LandingPage/Landing.js";
import Contact from "./Pages/Contact/Contact";
import Employees from "./Components/Employees.js"
import Customers from "./Components/customers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"



class App extends Component {
  state = {
    loading: true,
   
  };


  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  

  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    
    return (
      
      <Router>
        
    
             <Route path="/" exact  render={(props)=> <LandingPage {...props}/>}/>
             <Route path="/contact"  component={Contact}/>
             <Route path="/employees"  render={(props)=>( <Employees {...props}/>)}/>
             <Route path="/customers"  render={(props)=>( <Customers {...props}/>)}/>
            
   </Router>
      
    );
  }
}
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}


export default App;
