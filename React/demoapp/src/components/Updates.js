import React, { Component } from 'react';

class Updates extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="col-xl-4 grid-margin stretch-card">
              <div className="card">
				<div className="card-body">
			    	<p className="card-title">Updates</p>
					    <ul className="bullet-line-list mt-4">
							<li>
								<h6>User confirmation</h6>
								<p className="mt-2">Tonight's the night. And it's going to happen again and again. It has to happen. I'm thinking two circus clowns dancing. </p>
								<p className="text-muted mb-4">
								<i className="mdi mdi-clock-outline"></i>
									7 months ago.
								</p>
							</li>
							<li>
								<h6>Continuous evaluation</h6>
								<p className="mt-2">And it's going to happen again and again. It has to happen. I'm thinking two circus clowns dancing. Tonight's the night.  </p>
								<p className="text-muted mb-4">
								<i className="mdi mdi-clock-outline"></i>
									7 months ago.
								</p>
							</li>
							<li>
								<h6>Promotion</h6>
								<p className="mt-2">It has to happen. I'm thinking two circus clowns dancing. Tonight's the night. </p>
								<p className="text-muted">
								<i className="mdi mdi-clock-outline"></i>
									7 months ago.
								</p>
							</li>
						</ul>
				    </div>
				</div>
              </div>
         );
    }
}
 
export default Updates;