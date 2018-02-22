<template>
  <div class="card-image" :class="rarityStyle">
    <p class="card-title center">{{name}}</p>
    <img class="img-responsive" :src="url" :alt="idName">
  </div>
</template>

<script>

export default {
    props: ['idName','url','name','rarity'],

    computed: {

        rarityStyle() {

            if(this.rarity == 'Common' || !this.rarity) return 'rarity-default';
            if(this.rarity == 'Rare') return 'rarity-rare';
            if(this.rarity == 'Epic') return 'rarity-epic';
            if(this.rarity == 'Legendary') return 'rarity-legend';
        }

    }
}
</script>

<style scoped>
.center {
  text-align: center;
}
.card-title {
  font-weight: bold;
}

.card-image {
  width: 150px;
  /* padding: 0 0 30px 0; */
  height: 250px;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.rarity-default {
  /* border-bottom: solid 5px grey; */
  color: grey;
}

.rarity-rare {
  /* border-bottom: solid 5px orange; */
  color: orange;
}

.rarity-epic {
  /* border-bottom: solid 5px purple; */
  color: purple;
}

.rarity-legend {
  /* border-bottom: solid 5px blue; */
  color: blue;
}
</style>
