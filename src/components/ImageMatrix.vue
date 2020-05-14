<template>
  <div>
    <div v-bind:key="n" v-for="n in count">
      <span v-bind:key="j" v-for="j in count">
        <img :src="happy[0].default" :height="height" v-on:click="onClick" />
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
  beforeMount() {
    this.randlocation()
  },
  name: 'ImageMatrix',
  props: ['count', 'height'],
  data: () => {
    return {
      happy: happyImages,
      unhappy: unhappyImages,
      happyIndex: 0
    }
  },
  methods: {
    onClick() {
      this.randlocation()
    },
    randlocation() {
      this.happyIndex = Math.floor(Math.random() * this.count ** 2)
    }
  }
}
</script>

<style scoped></style>
