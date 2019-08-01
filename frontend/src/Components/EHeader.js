import React,{Component} from 'react';
import './EHeader.css';
import { NavLink } from "react-router-dom";

class Header extends Component {
  logout = async () => {
    localStorage.clear();
    window.location.href = '/';
console.log('token')
  };
    render() { 
        return ( 
            <div className="header-customers">
              <nav>
                     <ul className="actions-header">
                          <li className="options"><NavLink className="activeHeaders" exact to="/">Current Order</NavLink></li>
                          <li className="options"><NavLink className="activeHeaders" to="/previousorders">Previous Orders</NavLink></li>
                          <li className="options"><NavLink className="activeHeaders" to="/review">Review</NavLink></li>
                          <li className="options"><NavLink className="activeHeaders" to="/neworder">New Order</NavLink></li>
                          <li className="options"><NavLink className="activeHeaders" to="/newaccount">New Account</NavLink></li>
                          <li id="logOut" className="options"><button id="logout" onClick={this.logout}>Log Out</button></li>

                     </ul>

              </nav>

            </div>




         );
    }
}
 
export default Header;