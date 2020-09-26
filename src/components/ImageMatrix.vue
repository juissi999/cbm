<template>
  <div class="container">
    <template v-for="n in count">
      <hide-at :key="n" breakpoint="small">
        <div>
          <div v-for="j in count" :key="j">
            <img
              :src="
                happyRow === n && happyCol == j
                  ? randFromList(happy).default
                  : randFromList(unhappy).default
              "
              :height="height"
              v-on:click="onClick(happyRow === n && happyCol == j)"
            />
          </div>
        </div>
      </hide-at>
    </template>
  </div>
</template>

<script>
import { hideAt } from 'vue-breakpoints'

// TODO: check out the requires to be more "clear"
const importAll = r => {
  return r.keys().map(r)
}

const happyImages = importAll(
  require.context('../assets/happy_images/', false, /\.(png|jpe?g|svg)$/)
)
const unhappyImages = importAll(
  require.context('../assets/unhappy_images/', false, /\.(png|jpe?g|svg)$/)
)

export default {
  beforeMount () {
    this.randlocation()
  },
  name: 'ImageMatrix',
  components: { hideAt },
  props: ['count', 'height'],
  data: () => {
    return {
      happy: happyImages,
      unhappy: unhappyImages,
      happyRow: 0,
      happyCol: 0
    }
  },
  methods: {
    onClick (correct) {
      this.$emit('send-guess', correct)
      this.randlocation()
    },
    randlocation () {
      this.happyRow = Math.ceil(Math.random() * this.count)
      this.happyCol = Math.ceil(Math.random() * this.count)
    },
    randFromList (itemList) {
      const randIndex = Math.floor(Math.random() * itemList.length)
      return itemList[randIndex]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
