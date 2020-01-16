import React, { Component } from 'react';

class TotalSalesChart extends Component {
    state = { 
      totalSalesChart: {} 
    }

    async componentDidMount() {
      const tc = await fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart');
      const tcdata = await tc.json();
      this.setState({totalSalesChart: tcdata}) 
    }
   
      render() { 
        return ( 
            <div className="col-xl-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Total Sales</p>
                  <p className="text-muted">Audience to which the users belonged while on the current date Audience to which the users belonged while on the current date Audience to which the users belonged while on the current date </p>
                  <div className="d-flex flex-wrap mb-4 mt-4 pb-4">
                    <div className="mr-4 mr-md-5">
                      <p className="mb-0">Revenue</p>
                      <h4>{this.state.totalSalesChart.revenue}</h4>
                    </div>
                    <div className="mr-4 mr-md-5">
                      <p className="mb-0">Returns</p>
                      <h4>{this.state.totalSalesChart.returns}</h4>
                    </div>
                    <div className="mr-4 mr-md-5">
                      <p className="mb-0">Queries</p>
                      <h4>{this.state.totalSalesChart.queries}</h4>
                    </div>
                    <div className="mr-4 mr-md-5">
                      <p className="mb-0">Invoices</p>
                      <h4>{this.state.totalSalesChart.invoices}</h4>
                    </div>
                  </div>
                  <canvas id="total-sales-chart"></canvas>
                </div>
              </div>
            </div>
         );
    }
}
 
export default TotalSalesChart;