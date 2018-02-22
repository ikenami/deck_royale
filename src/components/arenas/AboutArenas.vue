<template>
  <div class="left">
    <h1><span class="info-title">{{arena.name}}</span></h1>
    <br>
    <p class="info-text"><b>Number:</b> {{ arena.number }}</p>
    <p class="info-text"><b>Victory Gold:</b> {{ arena.victoryGold }}</p>
    <p class="info-text"><b>Min Trophies:</b> {{ arena.minTrophies }}</p>
    <p class="info-text"><b>Clan Donate</b></p>
    <p class="info-text"><b>- Common:</b> {{ arena.clan.donate.common }}</p>
    <p class="info-text"><b>- Rare:</b> {{ arena.clan.donate.rare }}</p>
    <p class="info-text"><b>Clan Request</b></p>
    <p class="info-text"><b>- Common:</b> {{ arena.clan.request.common }}</p>
    <p class="info-text"><b>- Rare:</b> {{ arena.clan.request.rare }}</p>

  </div>
</template>
<script>
export default {
  props: ['arena']
}
</script>
<style>
</style>
