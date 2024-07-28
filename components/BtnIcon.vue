<template>
  <button
    :class="{
      btn: true,
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-ghost': variant === 'ghost',
      ['invert']: invert,
      'bg-primary-invert': invert,
    }"
    :style="{
      width: btnSizePx ?? '',
      height: btnSizePx ?? '',
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

const btnSize = computed(() => {
  if (props.size) return props.size;
  return 36;
});

const btnSizePx = computed(() => {
  return `${btnSize.value}px`;
});

const iconSize = computed(() => {
  if (props.iconSize) return `${props.iconSize}px`;
  return btnSize.value - 16;
});
</script>

<style lang="sass">
.btn
  @extend .rounded-full, .flex, .items-center, .justify-center
  border: none
  &:hover
    @extend .bg-overlay-highlight

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
</style>
