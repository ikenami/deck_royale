<template>
  <div>
    <div class="center">
      <div class="col-md-8">
        <button type="button" class="btn btn-danger btn-lg" @click="newDeck()">Generate New Deck</button>
        <br><br>
      </div>
    </div>
    <div class="row">
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
        <h1 class="info-title">About this deck</h1>

        <p class="info-text"><b>Elixir Cost:</b> {{ deckElixirCost }}</p>
        <p class="info-text"><b>Deck for Arena:</b> {{ maxArena }}</p>
        <p class="info-text"><b>Common Cards:</b> {{ countCommonCards }}</p>
        <p class="info-text"><b>Rare Cards:</b> {{ countRareCards }}</p>
        <p class="info-text"><b>Epic Cards:</b> {{ countEpicCards }}</p>
        <p class="info-text"><b>Legendary Cards:</b> {{ countLegenCards }}</p>

      </div>
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
  computed: {
    deckElixirCost() {
      let totalElixir = 0;
      console.log(this.deck);
      this.deck.forEach(function(item, index, arr){
        totalElixir += item.elixirCost;
      });
      return Math.round(totalElixir/8*10)/10;
    },
    maxArena() {
      let arena = 0;
      this.deck.forEach(function(item, index, arr){
        if (item.arena > arena) {
          arena = item.arena;
        }
      });
      return arena;
    },
    countCommonCards() {
      let common = 0;
      this.deck.forEach(function(item,index,arr){
        if (item.rarity == "Common"){
          common += 1;
        }
      });
      return common;
    },
    countRareCards() {
      let rare = 0;
      this.deck.forEach(function(item,index,arr){
        if (item.rarity == "Rare"){
          rare += 1;
        }
      });
      return rare;
    },
    countEpicCards() {
      let epic = 0;
      this.deck.forEach(function(item,index,arr){
        if (item.rarity == "Epic"){
          epic += 1;
        }
      });
      return epic;
    },
    countLegenCards() {
      let legend = 0;
      this.deck.forEach(function(item,index,arr){
        if (item.rarity == "Legendary"){
          legend += 1;
        }
      });
      return legend;
    }
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
      deck: [],
      elixirCost: 0
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

  .right {
    text-align: right;
  }

  .list-deck {
    list-style: none;
  }

  .list-deck .list-deck-item {
    display: inline-block;
    overflow: hidden;
  }

  .info-title {
    font-weight: bold;
    border-bottom: solid 5px red;
    font-family: helvetica, sans-serif;
  }

  .info-text {
    font-size: 1.4em;
    font-family: helvetica, sans-serif;
  }
</style>
