<template>
  <div
    :class="['rounded-full', 'avatar', borderless ? 'borderless' : '']"
    :style="{
      width: size ? size + 'px' : '',
      height: size ? size + 'px' : '',
      backgroundColor: color ?? '',
    }"
  >
    <img :src="src" :alt="alt" v-if="src" class="img" />
    <p v-else-if="text" class="text">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  src: String,
  alt: String,
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
  borderless: Boolean,
  text: String,
});
</script>

<style lang="sass" scoped>
.avatar
   background-color: #fff
   border: 1px solid $border_main_primary
   @extend .flex, .items-center, .justify-center, .rounded-full

.img
   width: 100%
   height: 100%
   @extend .rounded-full
   margin: 1px

.borderless
    border: none
.text
    line-height: 1
    @extend .flex, .items-center, .justify-center, .uppercase, .text-sm, .font-weight-medium
</style>
