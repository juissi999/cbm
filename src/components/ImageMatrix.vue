<template>
  <div>
    <div v-bind:key="n" v-for="n in count">
      <span v-bind:key="j" v-for="j in count">
        <img
          v-if="happyRow === n && happyCol == j"
          :src="randFromList(happy).default"
          :height="height"
          v-on:click="onClick(true)"
        />
        <img
          v-else
          :src="randFromList(unhappy).default"
          :height="height"
          v-on:click="onClick(false)"
        />
      </span>
    </div>
  </div>
</template>

<script>
// TODO: check out the requires to be more "clear"
const importAll = r => {
  return r.keys().map(r)
}

const happyImages = importAll(
  require.context('../happy_images/', false, /\.(png|jpe?g|svg)$/)
)
const unhappyImages = importAll(
  require.context('../unhappy_images/', false, /\.(png|jpe?g|svg)$/)
)

export default {
  beforeMount () {
    this.randlocation()
  },
  name: 'ImageMatrix',
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

<style scoped></style>
