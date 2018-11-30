<template>
  <div class="home">
        <div class="display-3">
      <img alt="Vue logo" src="@/assets/logo.png" id="logo">
      Exercise App
    </div>
    <Nav />
    <div class="jumbotron">
      <h1 class="display-4">Welcome</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'profile',
  components: {
    Nav
  }
}
</script>
