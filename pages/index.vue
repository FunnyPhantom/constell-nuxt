<template>
  <div class="pb-8 pt-3 flex flex-column page-container">
    <SearchBox />
    <TeamSection />
    <PeopleSection />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.page-container
  gap: $spacing-04
  @include respond-to(m)
    &
      gap: $spacing-05
      padding: 0 $spacing-04
  @include respond-to(l)
    &
      padding: 0 $spacing-05
</style>
