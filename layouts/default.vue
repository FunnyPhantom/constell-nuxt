<template>
  <div>
    <nav class="sidebar-nav flex flex-column justify-between items-center">
      <div class="flex flex-column justify-between items-center gap-3">
        <img src="/Logo.svg" alt="Logo" />
        <BtnIcon
          variant="primary"
          :size="24"
          :icon-size="22"
          class="p-0 ml-7"
          icon="material-symbols-light:chevron-right-rounded"
          invert
        />
        <BtnIcon icon="internal:today-outline" :size="48" />
        <BtnIcon icon="internal:contact-outline" :size="48" />
        <BtnIcon icon="internal:events-outline" :size="48" />
        <BtnIcon icon="internal:finances-outline" :size="48" />
        <BtnIcon icon="internal:venue" :size="48" />
      </div>
      <div class="flex flex-column justify-between items-center gap-3">
        <BtnIcon icon="iconamoon:search-bold" />
        <BtnIcon icon="lucide:info" />
      </div>
    </nav>
    <div class="main-content">
      <TopBar />
      <slot />
      <BottomNav />
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
$sidebar-width: 60px

.sidebar-nav
  position: fixed
  height: 100%
  width: $sidebar-width
  border-right: 1px solid black
  z-index: 2
  @extend .bg-primary
  display: none
  @include respond-to(m)
    display: flex
    padding:  $spacing-04 0 $spacing-06 0

.main-content
  margin-left: 0
  @include respond-to(m)
   &
    margin-left: $sidebar-width
</style>
