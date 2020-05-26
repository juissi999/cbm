<template>
  <div>Results: {{ correct }} / {{ guesses }}</div>
</template>

<script>
export default {
  name: 'ResultBar',
  props: ['guesses', 'correct']
}
</script>

<style scoped></style>
