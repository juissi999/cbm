<template>
  <div>
    {{header}}
    <ImageMatrix v-bind:images='imgs' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ImageMatrix from './components/ImageMatrix.vue'

export default {
  name: 'App',
  components: {
    ImageMatrix
  },
  data() {
    return {
      header:'CBM',
      imgs:['sad', 'sad', 'happy']}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
