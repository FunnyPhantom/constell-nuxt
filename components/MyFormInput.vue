<template>
  <FormKit
    v-bind="(props as any)"
    :classes="{
      outer: 'my-input__outer',
      wrapper: 'my-input__wrapper',
      label: `my-input__label ${
        isRequiredField ? 'my-input__label--required' : ''
      }`,
      inner: 'my-input__inner',
      input: 'my-input__input',
      messages: 'my-input__messages',
    }"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  type: String,
  name: String,
  label: String,
  validation: String,
});

const isRequiredField = computed(() => {
  if (typeof props.validation === "string") {
    return props.validation.includes("required");
  }
  return false;
});
</script>

<style lang="sass">
.my-input
  &__outer
    @extend .flex-auto,
  &__wrapper
    @extend .text-primary, .text-sm

  &__label
    @extend .text-secondary, .text-sm, .font-weight-light, .mb-1
    display: inline-block
    &--required::after
      content: "*"
      margin-left: $spacing-01
      font-weight: 500
  &__input
    @extend .rounded-sm, .p-3, .bg-primary,
    border: 1px solid $border_main_quarternary
    width: 100%
    &:focus
      outline-color: $border_main_quarternary
      outline-style: ridge
  &__messages
    @extend .text-sm, .font-weight-light, .mt-1, .ml-2
</style>
