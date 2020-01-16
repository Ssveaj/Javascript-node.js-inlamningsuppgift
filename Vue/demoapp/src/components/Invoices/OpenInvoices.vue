<template>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <p class="card-title">Open Invoices</p>
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quibusdam eum, totam ut minus dolor eaque alias ratione repellat voluptate, libero beatae nobis facere quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque harum maxime quaerat quasi earum totam consectetur eius quisquam deleniti et.</p>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr class="border-top-0">
                                <th class="text-muted">Invoice</th>
                                <th class="text-muted">Customer</th>
                                <th class="text-muted">Ship</th>
                                <th class="text-muted">Best Price</th>
                                <th class="text-muted">Purchsed Price</th>
                                <th class="text-muted">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            <OpenInvoice :key="openinvoice.invoice" v-for="openinvoice of openinvoices" :openinvoice="openinvoice" />
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import OpenInvoice from "./OpenInvoice"

export default {
  name: "OpenInvoices",
  components: {
    OpenInvoice
  },
  data() {
    return {
      openinvoices : []
    }
  },
  created() {
    fetch("https://inlupp-fa.azurewebsites.net/api/open-invoices")
    .then(res => res.json())
    .then(data => {
      this.openinvoices = data;
  
    })
  } 
}
</script>
