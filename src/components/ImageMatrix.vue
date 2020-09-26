<template>
  <div class="container">
    <div v-bind:key="c" v-for="c in count">
      <div v-bind:key="r" v-for="r in count">
        <template v-if="showColumns.find(cols => cols === c)">
          <img
            :src="
              happyRow === r && happyCol === c
                ? randFromList(happy).default
                : randFromList(unhappy).default
            "
            :height="height"
            v-on:click="onClick(happyRow === r && happyCol === c)"
          />
        </template>
        <template v-else>
          <show-at breakpoint="mediumAndAbove">
            <img
              :src="
                happyRow === r && happyCol === c
                  ? randFromList(happy).default
                  : randFromList(unhappy).default
              "
              :height="height"
              v-on:click="onClick(happyRow === r && happyCol === c)"
            />
          </show-at>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { showAt } from 'vue-breakpoints'

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
  components: { showAt },
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
  },
  computed: {
    showColumns: function () {
      console.log(this.happyCol, this.happyCol === 1)
      if (this.happyCol === 1) {
        return [1, 2]
      } else {
        return [1, this.happyCol]
      }
    }
  }
}
</script>
