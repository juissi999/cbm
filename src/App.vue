<template>
  <div>
    {{ header }}
    <ControlBar />
    <ImageMatrix />
    <ResultBar />
  </div>
</template>

<script>
import ImageMatrix from './components/ImageMatrix.vue'
import ControlBar from './components/ControlBar.vue'
import ResultBar from './components/ResultBar.vue'

const DEFAULT_IMAGECOUNT = 4
const DEFAULT_HEIGHT = 150

export default {
  name: 'App',
  components: {
    ImageMatrix,
    ControlBar,
    ResultBar
  },
  data() {
    return {
      header: 'CBM'
    }
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
