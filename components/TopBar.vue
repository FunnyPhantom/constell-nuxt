<template>
  <div class="container_background"></div>
  <div class="container">
    <div>back</div>
    <div class="title">Venue People</div>
    <div>...</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>

.container
  display: flex
  justify-content: space-between
  align-items: center
  background-color: $background_main_primary-invert
  color: $text_main_primary-invert
  gap: auto
  @extend .p-2, .sticky, .top-0, .left-0, .right-0
  z-index: 1

.container_background
  background-color: $background_main_primary-invert
  @extend .fixed,
  height: 1rem
  width: 100%
  top: -0.5rem


.title
  font-family: "Cormorant Infant", serif
  font-weight: 500,
  line-height: 1.2
  @extend .text-lg
</style>
