<template>
  <div>
    <div v-for="(img, i) in images" :key="i">
      <img :src="img.path" :height="height" v-on:click="img.callback" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageColumn',
  props: ['images', 'height']
}
</script>
