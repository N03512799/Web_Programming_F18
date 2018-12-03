<template>
  <div id="app">
    

    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#logo { height: 50px;}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import cardio from './assets/cardio.jpg'

export default {
  name: 'home',
  cardio: cardio,
  components: {
    Nav
  }
}

</script>
