<template>
  <div class="container">Results: {{ correct }} / {{ guesses }}</div>
</template>

<script>
export default {
  name: 'ResultBar',
  props: ['guesses', 'correct']
}
</script>
