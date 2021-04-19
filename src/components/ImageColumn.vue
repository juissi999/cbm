<template>
  <div>
    <template v-for="(img, i) in images" >
      <Img :img="img" :height="height" :key="i"/>
    </template>
  </div>
</template>

<script>
import Img from './Img.vue'

export default {
  name: 'ImageColumn',
  components: { Img },
  props: ['images', 'height']
}
</script>
