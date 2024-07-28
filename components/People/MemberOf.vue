<template>
  <div class="flex">
    <div v-for="(team, index) in teams" :key="team.id" class="item">
      <Avatar :size="size" :color="team.color" :text="teamInitials[index]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

interface Team {
  id: number;
  name: string;
  color: string;
}

const props = defineProps({
  size: Number,
  teams: {
    type: Array as PropType<Team[]>,
    default: () => [
      {
        id: 1,
        name: "M",
        color: "#FFC9C9",
      },
      {
        id: 2,
        name: "B",
        color: "#A5A4D4",
      },
      {
        id: 3,
        name: "C",
        color: "#C1E0B9",
      },
    ],
  },
});

const teamInitials = computed(() => {
  return props.teams.map((team) =>
    team.name
      .split(" ")
      .map((word) => word[0])
      .join("")
  );
});
</script>

<style lang="sass" scoped>

.item
  &:not(:first-child)
    margin-left: calc(-1 * $spacing-01)
    @include respond-to(m)
      &
        margin-left: calc(-1 * $spacing-02)
    @include respond-to(l)
      &
        margin-left: calc(-1 * $spacing-01)
</style>
