<template>
  <div>
    <div class="row" v-if="this.hasContent">
      <div class="col-md-8">
        <ul class="list-deck row">
          <li class="list-deck-item col-md-3 col-sm-12" v-for="clash_card of deck">
            <router-link :to="{ name : 'cardInfo', params: { id: clash_card._id} }">
              <clash-card :url="`http://www.clashapi.xyz/images/cards/${clash_card.idName}.png`" :rarity="clash_card.rarity" :name="clash_card.name" :idName="clash_card.idName"/>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <about-deck :deck="this.deck"/>
        <br>
        <button type="button" class="btn btn-danger btn-lg" @click="newDeck()">Generate New Deck</button>
      </div>
    </div>
    <div class="row center" v-else>
      <h1>Ooooooops</h1>
      <p>Something went wrong and we could not retrieve the cards from our servers.<br>
        Please try again later.</p>
    </div>
  </div>
</template>

<script>
import AboutDeck from './AboutDeck.vue';
import ClashCard from '../shared/clash-card/ClashCard.vue';
import ClashService from '../../domain/clash/ClashService';

export default {

  components: {
    'clash-card': ClashCard,
    'about-deck': AboutDeck
  },

  methods: {

    newDeck(foto) {
      this.service
        .listDeck()
        .then(deck => this.deck = deck, err => this.mensagem = err.message);
    }

  },

  data() {

    return {
      deck: [],
      elixirCost: 0,
      hasContent: false
    }
  },

  created() {

    this.service = new ClashService(this.$resource);

    this.service
      .listDeck()
      .then(deck => {
        this.hasContent = true;
        this.deck = deck;
      }, err => this.mensagem = err.message);
  }
}

</script>

<style>
  .list-deck {
    list-style: none;
  }

  .list-deck .list-deck-item {
    display: inline-block;
    overflow: hidden;
  }

</style>
