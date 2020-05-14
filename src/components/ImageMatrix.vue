<template>
  <div>
    <div v-bind:key="i" v-for="(image, i) in happy">
      <img :src="image.default" />
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

console.log(happyImages.length)

export default {
  beforeCreate() {},
  name: 'ImageMatrix',
  props: ['images'],
  data: () => {
    return {
      unhappy: happyImages,
      happy: unhappyImages
    }
  }
}
</script>

<style scoped></style>
