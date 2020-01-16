import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Welcome from './components/welcome';
import Users from './components/Users';
import Project from './components/Icons/TotalProject';
import Downloads from './components/Downloads';
import TotalSalesChart from './components/Total/TotalSalesChart';
import TotalSales from './components/Icons/TotalSales';
import TotalPurchases from './components/Icons/TotalPurchases';
import TotalOrders from './components/Icons/TotalOrders';
import TotalGrowth from './components/Icons/TotalGrowth';
import Tickets from './components/Tickets';
import Updates from './components/Updates';
import Distribution from './components/Distribution';
import SaleReport from './components/SaleReport';
import SalesReportOverview from './components/SalesReportOverview';
import Openinvoices from './components/Invoice/Openinvoices';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-scroller">
     <Navbar /> 
     <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">    
          <Welcome />
          <div className="row">
            <div className="col-xl-6 grid-margin">
              <div className="row">              
                <Users />
                <Project />
              </div>
              <Downloads />
            </div>
               <TotalSalesChart />
          </div>
          <div className="row">
               <TotalSales />
               <TotalPurchases />
               <TotalOrders />
               <TotalGrowth />
          </div>
          <div className="row">
            <Tickets />
            <Updates />
          </div>
          <div className="row">
            <Distribution />
            <div className="col-xl-9 grid-margin stretch-card">
              <div className="card">
                <div className="row">
                  <SaleReport />
                  <SalesReportOverview />
                </div>
              </div>
            </div>
          </div>
         <Openinvoices /> 
        </div>
        <Footer />
      </div>
    </div>
  </div>
  
  );
  
}
export default App;