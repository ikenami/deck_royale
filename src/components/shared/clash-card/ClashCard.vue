<template>
  <div class="card-image" :class="rarityStyle">
    <p class="card-title center"><span>{{name}}</span></p>
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


.rarity-default span{
  border-bottom: solid 3px grey;
  color: black;
  /* color: grey; */
}

.rarity-rare span{
  border-bottom: solid 3px orange;
  color: black;
  /* color: orange; */
}

.rarity-epic span{
  border-bottom: solid 3px purple;
  color: black;
  /* color: purple; */
}

.rarity-legend span{
  border-bottom: solid 3px blue;
  color: black;
  /* color: blue; */
}
</style>
