<template>
  <div>
    <div v-bind:key="n" v-for="n in count">
      <span v-bind:key="j" v-for="j in count">
        <img :src="happy[0].default" :height="height" />
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
  beforeCreate() {},
  name: 'ImageMatrix',
  props: ['count', 'height'],
  data: () => {
    return {
      happy: happyImages,
      unhappy: unhappyImages
    }
  }
}
</script>

<style scoped></style>
