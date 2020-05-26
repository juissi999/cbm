import Vue from 'vue/dist/vue.runtime'
import App from './App.vue'

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

new Vue({
  render:h=>h(App),
}).$mount('#app')
