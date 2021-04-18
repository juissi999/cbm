<template>
  <div class="row wrap justify-content-center">
    <div class="mx-4">
    <button class="jred pointer" v-on:click="$emit('update-count', count - 1)">-</button>
    Images: {{ count }}
    <button class="jgreen pointer" v-on:click="$emit('update-count', count + 1)">+</button>
    </div>
    <div class="mx-4">
    <button class="jred pointer" v-on:click="$emit('update-height', imgsize - heightStep)">-</button>
    Imagesize: {{ imgsize }}
    <button class="jgreen pointer" v-on:click="$emit('update-height', imgsize + heightStep)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlBar',
  props: ['count', 'imgsize'],
  data () {
    return { heightStep: 5 }
  }
}
</script>
