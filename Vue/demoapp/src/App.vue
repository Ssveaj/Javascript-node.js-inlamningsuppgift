<template>
  <div class="container-scroller">

    <Navbar />    

    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          
          <WelcomeMessage />
          
          <div class="row">
            <div class="col-xl-6 grid-margin">
              <div class="row">
               
                <TotalUsers />
                <TotalProjects />
                
              </div>
              
              <Downloads />
            
            </div>
            
            <TotalSalesChart />
          
          </div>
          <div class="row">
            
            <TotalSales />
            <TotalPurchases />
            <TotalOrders />
            <TotalGrowth />
          
          </div>
          <div class="row">
            
            <Tickets />
            <Updates />
         
          </div>
          <div class="row">
            
            <Distribution />
            <SalesReport />

          </div>
          
          <OpenInvoices />
        
        </div>
        
        <Footer />
      
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "./components/Navigation/Navbar"
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage"
import TotalUsers from "./components/Total/TotalUsers"
import TotalProjects from "./components/Total/TotalProjects"
import Downloads from "./components/Downloads/Downloads"
import TotalSalesChart from "./components/Total/TotalSalesChart"
import TotalSales from "./components/Total/TotalSales"
import TotalPurchases from "./components/Total/TotalPurchases"
import TotalOrders from "./components/Total/TotalOrders"
import TotalGrowth from "./components/Total/TotalGrowth"
import Tickets from "./components/Tickets/Tickets"
import Updates from "./components/Updates/Updates"
import Distribution from "./components/Distribution/Distribution"
import SalesReport from "./components/SalesReport/SalesReport"
import OpenInvoices from "./components/Invoices/OpenInvoices"
import Footer from "./components/Footer/Footer"

export default {
  name: 'app',
  components: {
    Navbar,
    WelcomeMessage,
    TotalUsers,
    TotalProjects,
    Downloads,
    TotalSalesChart,
    TotalSales, 
    TotalPurchases,
    TotalOrders,
    TotalGrowth,
    Tickets,
    Updates,
    Distribution,
    SalesReport,
    OpenInvoices,
    Footer
  }
}
</script>
