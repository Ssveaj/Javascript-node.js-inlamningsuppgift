import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Welcome from './components/welcome';
import TotalUsers from './components/Total/TotalUsers';
import TotalProject from './components/Total/TotalProjects';
import Downloads from './components/Downloads';
import TotalSalesChart from './components/Total/TotalSalesChart';
import TotalSales from './components/Icons/TotalSales';
import TotalPurchases from './components/Icons/TotalPurchases';
import TotalOrders from './components/Icons/TotalOrders';
import TotalGrowth from './components/Icons/TotalGrowth';
import Tickets from './components/Tickets/Tickets';
import Updates from './components/Updates/Updates';
import Distribution from './components/Distribution';
import SaleReport from './components/SalesReport/SaleReport';
import SalesReportOverview from './components/SalesReport/SalesReportOverview';
import OpenInvoices from './components/Invoices/OpenInvoices';
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
                <TotalUsers />
                <TotalProject />
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
         <OpenInvoices /> 
        </div>
        <Footer />
      </div>
    </div>
  </div>
  
  );
  
}
export default App;