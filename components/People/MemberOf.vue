<template>
  <div class="flex">
    <div v-for="(team, index) in teams" :key="team.id" class="item">
      <Avatar :size="size" :color="team.color" :text="team.abbreviation" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { Team } from "~/server/api/team/data";

const props = defineProps({
  size: Number,
  teams: {
    type: Array as PropType<Team[]>,
    required: true,
  },
});
</script>

<style lang="sass" scoped>

.item
  &:not(:first-child)
    margin-left: calc(-1.5 * $spacing-01)
    @include respond-to(m)
      &
        margin-left: calc(-1 * $spacing-02)
    @include respond-to(l)
      &
        margin-left: calc(-1.6 * $spacing-01)
</style>
