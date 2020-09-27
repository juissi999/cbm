<template>
  <div class="container">
    <div v-bind:key="cind" v-for="(c, cind) in imgMatrix">
      <div v-bind:key="rind" v-for="(r, rind) in c">
        <template v-if="showColumns.includes(cind)">
          <img :src="r.path" :height="height" v-on:click="onClick(r.happy)" />
        </template>
        <template v-else>
          <show-at breakpoint="mediumAndAbove">
            <img :src="r.path" :height="height" v-on:click="onClick(r.happy)" />
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
            happy: this.happyRow === r && this.happyCol === c
          }
        })
      })
      return filledColumns
    }
  }
}
</script>
