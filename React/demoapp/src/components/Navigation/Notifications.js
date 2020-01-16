import React, { Component } from 'react';
import Notification from './Notification'

class Notifications extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      notifications: []
    }  
  }
      
  componentDidMount() {
    fetch("https://inlupp-fa.azurewebsites.net/api/notifications")
    .then(res => res.json())
    .then(data => {
    this.setState({notifications: data})
    })
  }
    render() { 
        return ( 
            
          <li className="nav-item dropdown mr-4">
            <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i className="mdi mdi-bell mx-0"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              
              { this.state.notifications.map((notification) => (<Notification key={notification.title} notification={notification} />)) }

            </div>
          </li>
         );
    }
}
 
export default Notifications;