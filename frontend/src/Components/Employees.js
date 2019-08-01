import React,{Component} from 'react';
import EHeader from "./EHeader";
import Order from './current order';
import Review from './Review';
import previousOreders from './previousOreders';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import NewOrder from "./New Order"
import NewAccount from "./NewAccount"

class Employyes extends Component {
    
    render() { 
        return (

    
            <Router>
            <div>
              <EHeader/>
               <Route path="/" exact component={Order}/>
               <Route path="/review" component={Review}/>
               <Route path="/previousorders" component={previousOreders}/>
               <Route path="/neworder" component={NewOrder}/>
               <Route path="/newaccount" component={NewAccount}/>
               </div>
          </Router>



        );
    }
}
 
export default Employyes;