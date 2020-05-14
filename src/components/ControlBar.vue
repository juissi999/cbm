<template>
  <div>
    <button v-on:click="images -= 1">-</button>
    Images: {{ images }}
    <button v-on:click="images += 1">+</button>
    <button v-on:click="size -= 1">-</button>
    Imagesize: {{ size }}
    <button v-on:click="size += 1">+</button>
  </div>
</template>

<script>
export default {
  name: 'ControlBar',
  props: ['count', 'imgsize'],
  data() {
    return { images: this.count, size: this.imgsize }
  }
}
</script>

<style scoped></style>
