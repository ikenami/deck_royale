<template>
  <div class="left">
    <h1><b>#</b> {{ arena.number }} - <span class="info-title">{{arena.name}}</span></h1>
    <br>
    <p class="info-text">+ <b>{{ arena.victoryGold }} Gold</b> per Victory</p>
    <p class="info-text">Need at least <b>{{ arena.minTrophies }} Trophies</b> </p>
    <p class="info-text"><b>Can Donate</b></p>
    <p class="info-text sub-text"><b>{{ arena.clan.donate.common}} Common <span v-if="(arena.clan.donate.common == '1')">Card</span><span v-else>Cards</span></b> to Clan</p>
    <p class="info-text sub-text"><b>{{ arena.clan.donate.rare }} Rare <span v-if="(arena.clan.donate.rare  == '1')">Card</span><span v-else>Cards</span></b> to Clan</p>
    <p class="info-text"><b>Can Request</b></p>
    <p class="info-text sub-text"><b>{{ arena.clan.request.common}} Common <span v-if="(arena.clan.request.common == '1')">Card</span><span v-else>Cards</span></b> to Clan</p>
    <p class="info-text sub-text"><b>{{ arena.clan.request.rare }} Rare <span v-if="(arena.clan.request.rare  == '1')">Card</span><span v-else>Cards</span></b> to Clan</p>
  </div>
</template>
<script>
export default {
  props: ['arena']
}
</script>
<style>
</style>
