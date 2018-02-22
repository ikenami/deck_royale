<template>
  <div>
    <div class="center">
        <ul class="list-deck row">
          <li class="list-deck-item col-xl-2 col-md-3 col-xs-12" v-for="clash_card of cards">
            <router-link :to="{ name : 'cardsInfo', params: { id: clash_card._id }}">
              <clash-card :url="`http://www.clashapi.xyz/images/cards/${clash_card.idName}.png`" :rarity="clash_card.rarity" :name="clash_card.name" :idName="clash_card.idName"/>
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

  data() {

    return {
      cards: []
    }
  },

  created() {

    this.service = new ClashService(this.$resource);

    this.service
      .listCards()
      .then(cards => this.cards = cards, err => this.mensagem = err.message);
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
