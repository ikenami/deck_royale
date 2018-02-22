<template>
  <div class="body container-fluid">
    <my-menu :routes="routes"/>
    <router-view></router-view>
  </div>
</template>
<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'my-menu' : Menu
  },

  data() {

    return {
      routes : routes.filter(route => route.menu)
    }
  }
}
</script>

<style></style>
