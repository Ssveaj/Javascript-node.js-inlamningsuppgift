import React, { Component } from 'react';
import Update from './Update'

class Updates extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
		  updates: []
		}  
	  }
	
	componentDidMount() {
		fetch("https://inlupp-fa.azurewebsites.net/api/updates")
		.then(res => res.json())
		.then(data => {
		this.setState({updates: data})
		})
	  }
    render() { 
        return ( 
            
            <div className="col-xl-4 grid-margin stretch-card">
              <div className="card">
				<div className="card-body">
			    	<p className="card-title">Updates</p>
					    <ul className="bullet-line-list mt-4">
							
						{ this.state.updates.map((update) => (<Update key={update.time} update={update} />)) }

						</ul>
				    </div>
				</div>
              </div>
         );
    }
}
 
export default Updates;