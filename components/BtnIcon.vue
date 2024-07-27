<template>
  <button
    :class="{
      btn: true,
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-ghost': variant === 'ghost',
      ['invert']: invert,
    }"
    :style="{
      width: size ?? '',
      height: size ?? '',
    }"
  >
    <Icon
      :icon="icon"
      :width="iconSize ?? 24"
      :height="iconSize ?? 24"
      :class="iconClass"
    />
  </button>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  iconSize: Number,
  size: Number,
  iconClass: String,
  variant: {
    type: String,
    default: "ghost",
    validator: (value: string) =>
      ["primary", "secondary", "ghost"].includes(value),
  },
  invert: Boolean,
});

const iconClass = props.iconClass ?? ".text-primary";
</script>

<style lang="sass">
.btn
  @extend .rounded-full, .flex, .items-center, .justify-center
  width: 40px
  height: 40px
  border: none
  &:hover
    @extend .bg-primary

.btn-primary
  @extend .bg-primary, .text-primary
.btn-secondary
  @extend .bg-secondary, .text-secondary
.btn-ghost
  @extend .bg-transparent, .text-primary
.invert
  @extend .text-primary-invert
  &:hover
    @extend .bg-primary-invert-highlight
.invert-bg
  @extend .bg-primary-invert
</style>
