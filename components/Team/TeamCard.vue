<template>
  <div
    class="container flex justify-between items-center rounded-sm bg-secondary py-3 px-3 pr-2"
  >
    <div class="flex items-center gap-2">
      <Avatar :size="36" color="#FFC9C9" borderless />
      <p>back of the house</p>
    </div>
    <BtnIcon class="team-card-buttons" icon="mage:edit-pen" variant="ghost" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.container
  width: calc(100vw - $spacing-02 * 2)
  @include respond-to(m)
    &
      max-width: calc((100vw - $spacing-04 * 2 - $spacing-02)/2)
  @include respond-to(l)
    &
      max-width: 350px
      flex: 1 1 275px
.team-card-buttons
  &:hover
    @extend .bg-primary
</style>
