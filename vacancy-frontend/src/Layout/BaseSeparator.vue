<template>
  <div class="sep"></div>
</template>

<script>
export default {
  name: "BaseSeparrator.vue"
}
</script>

<style scoped>
.sep {
  width: 100%;
  height: 4px;
  flex-shrink: 0;
  background: var(--red, #B20931);
}
</style>