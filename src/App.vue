<template>
  <div class="container">
    <h1 class="text-center">
      {{ header }}
    </h1>
    <ControlBar
    class="my-3"
      v-bind:count="count"
      v-bind:imgsize="height"
      v-on:update-height="updateHeight"
      v-on:update-count="updateCount"
    />
    <ImageMatrix
      v-on:send-guess="updateResult"
      :height="height"
      :count="count"
    />
    <ResultBar class="my-3 text-center" :guesses="guesses" :correct="correctGuesses" />
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
  data () {
    return {
      header: 'CBM',
      count: 4,
      height: 150,
      guesses: 0,
      correctGuesses: 0
    }
  },
  methods: {
    updateHeight (newHeight) {
      if (newHeight > 0 && newHeight < 250) {
        this.height = newHeight
      }
    },
    updateCount (newCount) {
      if (newCount > 1 && newCount < 8) {
        this.count = newCount
      }
    },
    updateResult (correct) {
      if (correct) {
        this.correctGuesses += 1
      }
      this.guesses += 1
    }
  }
}
</script>
