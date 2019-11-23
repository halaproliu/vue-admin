<template>
  <div id="app">
    <Container>
      <router-view />
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container.vue'
export default {
  components: {
    Container
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/reset.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
