import React, { Component } from 'react';



class Welcome extends Component {
    state = { 
      fullName: ''
     }

     componentDidMount() {
     
      fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=Joel&lastname=Ferm')
       .then(res => res.text())
       .then(data => {
         this.setState({ fullName: data })
       })
     }
    render() { 
        return ( 
            <div className="row">
            <div className="col-md-12 grid-margin">
                <div className="card bg-white">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <h4 className="mt-1 mb-1">Hi { this.state.fullName }. Welcome back!</h4>
                  </div>
                </div>
            </div>
          </div>
         );
    }
}
 
export default Welcome;