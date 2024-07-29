<template>
  <div :class="['flex', 'flex-column', 'responsive-gap']">
    <p class="subtitle text-secondary text-xs">People</p>
    <div class="flex flex-column people-section-container">
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
    </div>
    <div
      class="flex justify-center items-center-responsive gap-2 text-secondary text-sm cursor-pointer"
    >
      <Button icon-placement="left" icon-name="ic:round-plus" link="/people/add"
        >New User</Button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/Button.vue";
</script>

<style lang="sass">
.subtitle
  @extend .uppercase
  padding: 0 $spacing-03
  @include respond-to(m)
    &
      padding: 0 $spacing-03
.items-center-responsive
  @extend .flex, .items-center
  @include respond-to(m)
    &
      justify-content: start

.responsive-gap
  gap: $spacing-01
  @include respond-to(m)
    &
      gap: $spacing-02
  @include respond-to(l)
    &
      gap: $spacing-03
.people-section-container
  @include respond-to(m)
    &
      border: 1px solid $border_main_quarternary
      border-radius: $border-radius-03
    & .people-card-container:first-child
      border-top: 0
    & .people-card-container:last-child
      border-bottom: 0
</style>
