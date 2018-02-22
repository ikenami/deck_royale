<template>
  <div>
    <div class="row center">
      <button type="button" class="btn btn-primary btn-lg" @click="newDeck()">New Deck</button>
      <br><br>
    </div>
    <div class="row">
      <ul class="list-deck row col-md-8 col-md-offset-2">
        <li class="list-deck-item col-md-3 col-sm-12" v-for="clash_card of deck">
          <clash-card :url="`http://www.clashapi.xyz/images/cards/${clash_card.idName}.png`" :idName="clash_card.idName"/>

          <router-link :to="{ name : 'cardInfo', params: { id: clash_card._id} }">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClashCard from '../shared/clash-card/ClashCard.vue';
import ClashService from '../../domain/clash/ClashService';

export default {

  components: {
    'clash-card': ClashCard
  },

  methods: {

    newDeck(foto) {

      this.service
        .list()
        .then(deck => this.deck = deck, err => this.mensagem = err.message);
    }

  },

  data() {

    return {
      deck: []
    }
  },

  created() {

    this.service = new ClashService(this.$resource);

    this.service
      .list()
      .then(deck => this.deck = deck, err => this.mensagem = err.message);
  }
}

</script>

<style>

  .center {
    text-align: center;
  }

  .list-deck {
    list-style: none;
  }

  .list-deck .list-deck-item {
    display: inline-block;
  }
</style>
