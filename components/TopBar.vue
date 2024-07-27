<template>
  <div class="container_background"></div>
  <div class="container">
    <BtnIcon
      icon="material-symbols-light:chevron-left-rounded"
      invert
      variant="ghost"
    />
    <div class="title hide-l">Venue People</div>
    <BtnIcon
      icon="bi:three-dots-vertical"
      invert
      variant="ghost"
      :icon-size="16"
    />
  </div>
</template>

<script lang="ts" setup>
import BtnIcon from "~/components/BtnIcon.vue";
</script>

<style lang="sass" scoped>

.container
  // gap: auto
  @extend .p-2, .sticky, .top-0, .left-0, .right-0, .text-primary-invert, .bg-primary-invert, .flex, .items-center, .justify-between
  z-index: 1

.container_background
  background-color: $background_main_primary-invert
  @extend .fixed,
  height: 1rem
  width: 100%
  top: -0.5rem


.title
  @extend .text-lg, .font-fancy
</style>
