<template>
  <div
    :class="['team-card-container', 'flex', 'flex-column', 'responsive-gap']"
  >
    <p class="subtitle text-secondary text-xs">Teams</p>
    <div class="flex flex-wrap gap-2">
      <TeamCard v-for="team in teams" :key="team.id" :team="team" />
    </div>
    <div
      class="flex justify-center items-center-responsive gap-2 text-secondary text-sm cursor-pointer"
    >
      <Button icon-placement="left" icon-name="ic:round-plus" link="/team/add"
        >New Team</Button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import TeamCard from "~/components/Team/TeamCard.vue";
import Button from "~/components/Button.vue";

const teams = ref(await $fetch("/api/team"));
</script>

<style lang="sass" scoped>
.team-card-container
  padding: 0 $spacing-03
  @include respond-to(m)
    &
      padding: 0 0
.subtitle
  padding: 0 0
  @extend .uppercase
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
</style>
