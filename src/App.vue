<template>
  <div>
    {{ header }}
    <ControlBar
      v-bind:count="count"
      v-bind:imgsize="height"
      v-on:update-height="updateHeight"
      v-on:update-count="updateCount"
    />
    <ImageMatrix :height="height" />
    <ResultBar />
  </div>
</template>

<script>
import ImageMatrix from './components/ImageMatrix.vue'
import ControlBar from './components/ControlBar.vue'
import ResultBar from './components/ResultBar.vue'

export default {
  name: 'App',
  components: {
    ImageMatrix,
    ControlBar,
    ResultBar
  },
  data() {
    return {
      header: 'CBM',
      count: 4,
      height: 150
    }
  },
  methods: {
    updateHeight(newHeight) {
      this.height = newHeight
    },
    updateCount(newCount) {
      this.count = newCount
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
