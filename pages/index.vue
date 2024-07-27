<template>
  <div>This is the first page.</div>
  <div v-for="i of loremCount" :key="i">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</template>

<script lang="ts" setup>
const loremCount = new Array(60).fill(0).map((_, i) => i);
</script>

<style></style>
