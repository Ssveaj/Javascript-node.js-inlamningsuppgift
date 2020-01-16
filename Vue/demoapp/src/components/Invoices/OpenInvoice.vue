<template>
  <tr>
    <td>{{openinvoice.invoice}}</td>
    <td>{{openinvoice.customer}}</td>
    <td>{{openinvoice.shipping}}</td>
    <td class="font-weight-bold">{{openinvoice.currency}}{{openinvoice.bestPrice}}</td>
    <td>{{openinvoice.currency}}{{openinvoice.purchasedPrice}}</td>
    <td>
    
       <div class="badge badge-fw" v-bind:class="statusColor(openinvoice.status)">{{openinvoice.status}}</div>
    
    </td>
   </tr>
</template>

<script>
export default {
    name : "OpenInvoice",
    props: {
        openinvoice: Object
    },
    methods: {
      statusColor: (status) => {
        switch(status) {
          case "Progress":
          return "badge-success"
          case "Open":
          return "badge-warning"
          case "On hold":
          return "badge-danger"
          default:
          return "badge-secondary"

        }
      }
    }
}
</script>

    
