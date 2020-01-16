<template>
<div class="horizontal-menu">
    <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="container">
            <div class="navbar-menu-wrapper d-flex align-items-center">
                <ul class="navbar-nav navbar-nav-right">

                    <Messages />
                    <Notifications />
                    <Userprofile />

                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                    <span class="mdi mdi-menu"></span>
                </button>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import Messages from "./Messages"
import Notifications from "./Notifications"
import Userprofile from "./Userprofile"

export default {
  name: 'app',
  components: {
    Messages,
    Notifications,
    Userprofile,
  }
}
</script>


