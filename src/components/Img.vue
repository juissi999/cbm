<template>
  <div>
    <img :class="isClicked" :src="img.path" :height="height" v-on:click="onClick" />
  </div>
</template>

<script>
export default {
  name: 'Img',
  props: ['img', 'height'],
  data: () => {
    return {
      clicked: false
      }
    },
  computed: {
    isClicked: function() {
      if(this.clicked) {
        const resultClass = this.img.happy?'happyc':'unhappyc'
        return 'ma-1 pa-1 pointer ' + resultClass
      }
      return 'ma-1 pa-1 pointer'
    }
  },
  methods: {
    onClick() {
      this.clicked = true
      setTimeout(this.transitionDone, 500)
    },
    transitionDone() {
      this.clicked = false
      setTimeout(this.img.callback)
    }
  }
}
</script>
<style scoped>
.happyc {
  transform: rotate(360deg);
  transition: 500ms ease-out;
}
.unhappyc {
  filter:blur(5px);
  transition: 500ms ease-out; 
}
</style>
