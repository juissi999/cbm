<template>
  <div>
    <div v-bind:key='i' v-for='(image, i) in images'>
      {{image}}
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
