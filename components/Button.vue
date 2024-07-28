<template>
  <button
    :class="[
      'button',
      variant === 'primary' ? 'button-primary' : '',
      variant === 'secondary' ? 'button-secondary' : '',
      variant === 'ghost' ? 'button-ghost' : '',
      size === 'sm' ? 'button-sm' : '',
      size === 'md' ? 'button-md' : '',
      size === 'lg' ? 'button-lg' : '',
    ]"
  >
    <div v-if="iconPlacement === 'left'" class="px-1">
      <Icon
        v-if="iconName"
        :width="iconSize"
        :height="iconSize"
        :icon="iconName"
      />
    </div>
    <div class="button-slot">
      <template v-if="link">
        <NuxtLink :to="link">
          <slot />
        </NuxtLink>
      </template>
      <template v-else>
        <slot />
      </template>
    </div>
    <div v-if="iconPlacement === 'right'" class="px-1">
      <Icon
        v-if="iconName"
        :icon="iconName"
        :width="iconSize"
        :height="iconSize"
      />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  variant: {
    type: String,
    default: "ghost",
    validator: (value: string) =>
      ["primary", "secondary", "ghost"].includes(value),
  },
  iconName: {
    type: String,
    required: false,
  },
  iconPlacement: {
    type: String,
    default: "left",
    validator: (value: string) => ["left", "right"].includes(value),
  },
  link: {
    type: String,
  },
  size: {
    type: String,
    default: "sm",
    validator: (value: string) => ["sm", "md", "lg"].includes(value),
  },
  invert: {
    type: Boolean,
    default: false,
  },
});

const iconSize = props.size === "sm" ? 16 : props.size === "md" ? 24 : 32;
</script>

<style lang="sass" scoped>
.button
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  border: none

  @extend .text-primary, .rounded-full, .px-3, .py-2, .capitalize
  &:hover
    @extend .bg-overlay-highlight

.button-primary
  @extend .bg-primary, .text-primary
.button-secondary
  @extend .bg-secondary, .text-secondary
.button-ghost
  @extend .bg-transparent, .text-primary
.button-sm
  @extend .text-sm
.button-md
  @extend .text-md
.button-lg
  @extend .text-lg
.button-slot
  margin-bottom: 2px
</style>
