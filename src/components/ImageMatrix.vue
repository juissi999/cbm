<template>
  <div class="row justify-content-center">
    <div v-bind:key="cind" v-for="(col, cind) in imgMatrix">
      <template v-if="showColumns.includes(cind)">
        <image-column :images="col" :height="height" />
      </template>
      <template v-else>
        <show-at breakpoint="mediumAndAbove">
          <image-column :images="col" :height="height" />
        </show-at>
      </template>
    </div>
  </div>
</template>

<script>
import { showAt } from 'vue-breakpoints'
import imageColumn from './ImageColumn.vue'

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
  components: { showAt, imageColumn },
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
    onHappyClick () {
      this.$emit('send-guess', true)
      this.randlocation()
    },
    onUnhappyClick () {
      this.$emit('send-guess', false)
      this.randlocation()
    },
    randlocation () {
      this.happyRow = Math.floor(Math.random() * this.count)
      this.happyCol = Math.floor(Math.random() * this.count)
    },
    randFromList (itemList) {
      const randIndex = Math.floor(Math.random() * itemList.length)
      return itemList[randIndex]
    }
  },
  computed: {
    showColumns: function () {
      if (this.happyCol === 0) {
        return [0, 1]
      } else {
        return [0, this.happyCol]
      }
    },
    imgMatrix: function () {
      const columns = Array(this.count).fill(0)
      const filledColumns = columns.map((empty, c) => {
        const rows = Array(this.count).fill(0)
        return rows.map((empty2, r) => {
          return {
            path:
              this.happyRow === r && this.happyCol === c
                ? this.randFromList(this.happy).default
                : this.randFromList(this.unhappy).default,
            callback:
              this.happyRow === r && this.happyCol === c
                ? this.onHappyClick
                : this.onUnhappyClick
          }
        })
      })
      return filledColumns
    }
  }
}
</script>
