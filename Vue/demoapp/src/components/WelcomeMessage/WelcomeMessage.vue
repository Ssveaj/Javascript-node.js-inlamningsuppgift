<template>
<div class="row">
    <div class="col-md-12 grid-margin">
        <div class="card bg-white">
            <div class="card-body d-flex align-items-center justify-content-between">
                <h4 class="mt-1 mb-1">Hi {{ fullName }}, Welcome back!</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "WelcomeMessage",
    data() {
        return {
            fullName: ''
        }
    },
    created() {
        fetch("https://inlupp-fa.azurewebsites.net/api/users?firstname=Joel&lastname=Ferm")
        .then(res => res.text())
        .then(data => {
            this.fullName = data;
        })
    }
}
</script>