<template>
  <div
    :class="['rounded-full', 'avatar', borderless ? 'borderless' : '']"
    :style="{
      width: size ? size + 'px' : '',
      height: size ? size + 'px' : '',
      backgroundColor: color ?? '',
    }"
  >
    <img :src="src" :alt="alt" v-if="src" />
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
});
</script>

<style lang="sass" scoped>
.avatar
   width: 40px
   height: 40px
   background-color: #f0f0f0
   border: 1px solid #e0e0e0
   @extend .flex, .items-center, .justify-center, .rounded-full
</style>
