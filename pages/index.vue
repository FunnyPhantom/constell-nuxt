<template>
  <div class="pb-8 pt-3 gap-4 flex flex-column">
    <SearchBox />
    <TeamSection />
    <div v-for="i of loremCount" :key="i">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const loremCount = new Array(60).fill(0).map((_, i) => i);
</script>

<style></style>
