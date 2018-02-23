<template>

  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand"  :to="'/'">
          <span class="menu-title">Deck Royale</span>
        </router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">
              {{ route.title }}
            </router-link>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>

export default {

    props: {

        routes: {
            type: Array,
            required: true
        }
    }
}

</script>

<style>
.menu-title{
    font-weight: bold;
    /* border-bottom: solid 5px red; */
}
</style>
