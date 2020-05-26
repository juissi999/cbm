<template>
  <div>
    <button v-on:click="$emit('update-count', (count - 1))">-</button>
    Images: {{ count }}
    <button v-on:click="$emit('update-count', (count + 1))">+</button>
    <button v-on:click="$emit('update-height', (imgsize - heightStep))">-</button>
    Imagesize: {{ imgsize }}
    <button
      v-on:click="$emit('update-height', (imgsize + heightStep))"
    >+</button>
  </div>
</template>

<script>
export default {
  name: 'ControlBar',
  props: ['count', 'imgsize'],
  data() {
    return { heightStep: 5 }
  }
}
</script>

<style scoped></style>
