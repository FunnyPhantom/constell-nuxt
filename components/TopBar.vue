<template>
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
  padding: $spacing-02 $spacing-02
  background-color: $background_main_primary-invert
  color: $text_main_primary-invert
  height: 50px
  gap: auto

.title
  font-family: "Cormorant Infant", serif
  font-weight: 500,
  line-height: 1.2
  @extend .text-lg
</style>
