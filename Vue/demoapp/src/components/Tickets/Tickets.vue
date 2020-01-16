<template>
 <div class="col-xl-8 grid-margin stretch-card">
    <div class="card">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-md-end flex-wrap">
                <p class="card-title">Tickets</p>
                <div class="dropdown mb-3 mb-md-0">
                   
                    <select id="dropdownMenuDate1" class="btn btn-sm btn-outline-light dropdown-toggle text-dark">
                        
                    </select>
                
                </div>
            </div>
            <div class="table-responsive">
                <table class="table tickets-table mb-2">
                    <thead>
                        <th class="text-muted pl-0">
                            Name
                        </th>
                        <th></th>
                        <th class="text-muted">
                            Date
                        </th>
                        <th class="text-muted">
                            Projects
                        </th>
                    </thead>
                    <tbody>

                      <Ticket :key="ticket.date" v-for="ticket of tickets" :ticket="ticket" />
                    
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Ticket from "./Ticket"

export default {
  name: "Tickets",
  components: {
    Ticket
  },
  data() {
    return {
      tickets : []
    }
  },
  methods: {
    populateSelectBox: () => {
    fetch("https://inlupp-fa.azurewebsites.net/api/tickets")
      .then(res => res.json())
      .then(data => {
        
        for(let obj of data) {
          let element = document.createElement("option");
          element.textContent = obj.year;
          element.value = obj.year;
          element.selected = true;
          document.getElementById('dropdownMenuDate1').appendChild(element);
        }
      }); 
    }
  },
  created() {

    this.populateSelectBox();

    fetch("https://inlupp-fa.azurewebsites.net/api/tickets")
    .then(res => res.json())
    .then(data => { 

    if(this.populateSelectBox === '2017') 
        return this.tickets = data[0].tickets;
    else if(this.populateSelectBox2 === '2018')
        return this.tickets = data[1].tickets;
    else(this.populateSelectBox3 === '2019')
        return this.tickets = data[2].tickets;
  
    })
  } 
}
</script>
