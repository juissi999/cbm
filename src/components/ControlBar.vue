<template>
  <div>
    <button v-on:click="$emit('update-count', (images -= 1))">-</button>
    Images: {{ images }}
    <button v-on:click="$emit('update-count', (images += 1))">+</button>
    <button v-on:click="$emit('update-height', (size -= heightStep))">-</button>
    Imagesize: {{ size }}
    <button v-on:click="$emit('update-height', (size += heightStep))">+</button>
  </div>
</template>

<script>
export default {
  name: 'ControlBar',
  props: ['count', 'imgsize'],
  data() {
    return { images: this.count, size: this.imgsize, heightStep: 5 }
  }
}
</script>

<style scoped></style>
