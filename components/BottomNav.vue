<template>
  <div cass="compensator hide-m"></div>
  <nav class="bottom-nav hide-m flex items-center justify-around gap-3">
    <BtnIcon icon="internal:today-outline" :size="48" />
    <BtnIcon icon="internal:contact-outline" :size="48" />
    <BtnIcon
      icon="internal:events-outline"
      class="main-nav-button"
      :size="60"
      :icon-size="24"
    />
    <BtnIcon icon="internal:finances-outline" :size="48" />
    <BtnIcon icon="internal:venue" :size="48" />
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.bottom-nav
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  border-top: 1px solid black
  @extend .py-2, .bg-primary

.main-nav-button
  @extend .rounded-full, .bg-primary
  border: 1px solid black
  margin-top: calc(-1 * $spacing-06)


  &:hover
    @extend .bg-overlay-highlight

.compensator
  height: 56px
</style>
