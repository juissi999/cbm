<template>
  <div>
    <div v-bind:key='i' v-for='(image, i) in images.url_happy'>
      <img :src='image' />
    </div>
        <div v-bind:key='i' v-for='(image, i) in images.url_unhappy'>
      <img :src='image' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageMatrix',
  props:['images']
}
</script>

<style scoped>

</style>
