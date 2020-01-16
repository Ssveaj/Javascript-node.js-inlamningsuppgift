<template>
<div class="col-xl-4 grid-margin stretch-card">
    <div class="card">
        <div class="card-body">
            <p class="card-title">Updates</p>

            <Update :key="update.time" v-for="update of updates" :update="update" />

        </div>
    </div>
</div>
</template>

<script>
import Update from "./Update"

export default {
  name: "Updates",
  components: {
    Update
  },
  data() {
    return {
      updates : []
    }
  },
  created() {
    fetch("https://inlupp-fa.azurewebsites.net/api/updates")
    .then(res => res.json())
    .then(data => {
      this.updates = data;
  
    })
  }
  
}
</script>
