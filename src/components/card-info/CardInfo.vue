<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 col-md-offset-1">
        <img :src="`http://www.clashapi.xyz/images/cards/${card.idName}.png`" >
      </div>
      <div class="col-md-8 ">
        <h1><span class="info-title" :class="rarityStyle">{{card.name}}</span></h1>
        <br>
        <h6 class="text-uppercase">Rarity</h6>
        <p class="info-text">{{card.rarity}}</p>
        <h6 class="text-uppercase">Type</h6>
        <p class="info-text">{{card.type}}</p>
        <h6 class="text-uppercase">Name:</h6>
        <p class="info-text">{{card.name}}</p>
        <h6 class="text-uppercase">Description</h6>
        <p class="info-text">{{card.description}}</p>
        <h6 class="text-uppercase">Elixir Cost</h6>
        <p class="info-text">{{card.elixirCost}}</p>
        <h6 class="text-uppercase">Arena</h6>
        <p class="info-text">{{card.arena}}</p>

        <br>
        <router-link :to="{ name: 'home'}" v-if="this.$route.name == 'cardInfo'">
          <button type="button" class="btn btn-danger btn-lg">Back to Home</button>
        </router-link>
        <router-link :to="{ name: 'cards'}" v-else>
          <button type="button" class="btn btn-danger btn-lg">Back to Cards</button>
        </router-link>

      </div>

    </div>


  </div>
</template>

<script>

import ClashService from '../../domain/clash/ClashService';

export default {
  data() {

      return {
          card: [],
          id: this.$route.params.id
      }
  },
  created() {
      this.service = new ClashService(this.$resource,this.id);

      if(this.id) {
        this.service
          .search(this.id)
          .then(card => this.card = card);
      }
  },
  computed: {

      rarityStyle() {
          if(this.card.rarity == 'Common' || !this.card.rarity) return 'rarity-default';
          if(this.card.rarity == 'Rare') return 'rarity-rare';
          if(this.card.rarity == 'Epic') return 'rarity-epic';
          if(this.card.rarity == 'Legendary') return 'rarity-legend';
      }

  }
}
</script>

<style scoped>
h6 {
  /* font-weight: bold; */
  margin-bottom: 0;
}

.rarity-default {
  border-bottom: solid 5px grey;
  /* color: grey; */
}

.rarity-rare {
  border-bottom: solid 5px orange;
  /* color: orange; */
}

.rarity-epic {
  border-bottom: solid 5px purple;
  /* color: purple; */
}

.rarity-legend {
  border-bottom: solid 5px blue;
  /* color: blue; */
}
</style>
