<template>
  <div>
    <div class="center">
        <ul class="list-deck row">
          <li class="list-deck-item col-md-12" v-for="arena of arenas">
            <div class="row">
              <div class="col-md-6">
                <img :src="`http://www.clashapi.xyz/images/arenas/${arena.idName}.png`" :alt="arena.idName" style="height:auto; width:300px">
              </div>
              <div class="col-md-4">
                <about-arenas :arena="arena"/>
              </div>
            </div>
            <br>
            <hr>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import AboutArenas from './AboutArenas.vue';
import ClashService from '../../domain/clash/ClashService';

export default {
  components: {
    'about-arenas': AboutArenas
  },

  data() {

    return {
      arenas: [],
      message: ''
    }
  },

  created() {

    this.service = new ClashService(this.$resource);

    this.service
      .listArenas()
      .then(arenas => this.arenas = arenas, err => this.message = err.message);
  }
}

</script>

<style scoped>
  .list-deck {
    list-style: none;
  }

  .list-deck .list-deck-item {
    display: inline-block;
    overflow: hidden;
  }

li {
  margin-bottom: 40px;
}
</style>
