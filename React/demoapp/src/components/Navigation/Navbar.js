import React, { Component } from 'react';
import Messages from './Messages'
import Notifications from './Notifications';
import Profile from'./Profile';

class Navbar extends Component {
    state = { }

    render() { 
        return ( 
   <div className="horizontal-menu">
      <nav className="navbar top-navbar col-lg-12 col-12 p-0">
        <div className="container">
          <div className="navbar-menu-wrapper d-flex align-items-center">
            <ul className="navbar-nav navbar-nav-right">
                       
                  <Messages />
                  <Notifications />
                  <Profile />
            
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
              <span className="mdi mdi-menu"></span>   
            </button>
          </div>
        </div>
      </nav>
    </div>
         );
    }
}
 
export default Navbar;