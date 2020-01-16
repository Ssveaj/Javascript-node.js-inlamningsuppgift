<template>
  <div class="col-md-3 grid-margin stretch-card">
    <div class="card border-0 border-radius-2 bg-danger">
        <div class="card-body">
            <div class="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                <div class="icon-rounded-inverse-danger icon-rounded-lg">
                    <i class="mdi mdi-chart-donut-variant"></i>
                </div>
                <div class="text-white">
                    <p class="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Orders</p>
                    <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                        <h3 class="mb-0 mb-md-1 mb-lg-0 mr-1">{{ totalOrders.currency }}{{ totalOrders.amount }}</h3>
                        <small class="mb-0">This month</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "TotalOrders",
    data() {
        return {
            totalOrders: {}
        }
    },
    created() {
      fetch('https://inlupp-fa.azurewebsites.net/api/total-orders')
      .then(res => res.json())
      .then(data => {
       this.totalOrders = data;
      })
    }
}
</script>