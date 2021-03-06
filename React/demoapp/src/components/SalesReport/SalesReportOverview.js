import React, { Component } from 'react';

class SalesReportOverview extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      salesreports: {}
    }  
  }

    componentDidMount() {
      fetch("https://inlupp-fa.azurewebsites.net/api/sales-report")
      .then(res => res.json())
      .then(data => {
      this.setState({salesreports: data})
      })
    }
    render() { 
        return ( 
            <div className="col-md-5 col-lg-6 col-xl-5">
                    <div className="card-body">
                      <p className="card-title">Sales report overview</p>
                      <p className="pb-2 text-muted">Sale information on advertising, exhibitions, market research, online media, customer desires, PR and much more</p>
                      <div className="d-flex flex-wrap justify-content-start mt-3 mr-4">
                        <div className="mr-3">
                          <p className="mb-0">Downloads</p>
                          <h4>{this.state.salesreports.downloads}</h4>
                        </div>
                        <div className="mr-3">
                          <p className="mb-0">Purchases</p>
                          <h4>{this.state.salesreports.purchases}</h4>
                        </div>
                        <div className="mr-3">
                          <p className="mb-0">Users</p>
                          <h4>{this.state.salesreports.users}</h4>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <i className="mdi mdi-arrow-expand-up mb-0 text-success mr-2 mt-1"></i>
                        <p className="mb-0 text-dark">{this.state.salesreports.growth}</p>
                      </div>
                      <div className="d-flex flex-wrap mb-5">
                        <button className="btn btn-info mt-3 mr-2">Update</button>
                        <button className="btn btn-outline-light mt-3 text-dark">More</button>
                      </div>                  
                    </div>
                  </div>
         );
    }
}
 
export default SalesReportOverview;