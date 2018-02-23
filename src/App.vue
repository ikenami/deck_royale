<template>
  <div class="body container-fluid">
    <my-menu :routes="routes"/>
    <router-view class="menu-fixed-top-content"></router-view>
    <my-footer/>
  </div>
</template>
<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';
import Footer from './components/shared/footer/Footer.vue';

export default {

  components: {
    'my-menu' : Menu,
    'my-footer' : Footer
  },

  data() {

    return {
      routes : routes.filter(route => route.menu)
    }
  }
}
</script>

<style scoped>

.menu-fixed-top-content {
  padding-top: 70px;
  padding-bottom: 50px;
}

</style>
