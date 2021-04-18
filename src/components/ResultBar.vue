<template>
  <h3 class="text-jblue">Results: {{ correct }} / {{ guesses }}</h3>
</template>

<script>
export default {
  name: 'ResultBar',
  props: ['guesses', 'correct']
}
</script>
