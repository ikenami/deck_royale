<template>
  <div class="card-image">
    <img class="img-responsive" :src="url" :alt="idName">
  </div>
</template>

<script>

export default {
    props: ['idName','url']
}
</script>

<style scoped>
.card-image {
  width: 150px;
  height: 300px;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
