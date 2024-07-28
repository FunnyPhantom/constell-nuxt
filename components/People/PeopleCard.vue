<template>
  <div class="people-card-container flex items-center justify-between">
    <template v-if="breakpointsState === 's'">
      <div class="flex items-center gap-2">
        <Avatar
          :size="avatarSize"
          color="#FFC9C9"
          src="https://picsum.photos/36"
        />
        <div class="flex flex-column">
          <div class="flex gap-2">
            <p class="font-weight-medium">User Name</p>
            <p class="font-weight-light">Accountant</p>
          </div>
          <p class="text-secondary font-weight-light">+00 000 000 0000</p>
        </div>
      </div>
      <div><PeopleMemberOf :size="avatarSize" /></div>
      <BtnIcon icon="hugeicons:delete-03" variant="ghost" :size="btnSize" />
    </template>
    <template v-else-if="breakpointsState === 'm'">
      <div class="flex items-center gap-2">
        <Avatar
          :size="avatarSize"
          color="#FFC9C9"
          src="https://picsum.photos/36"
        />
        <div class="flex flex-column">
          <div class="flex gap-2">
            <p class="font-weight-medium">User Name</p>
          </div>
          <div class="flex gap-1 items-center text-secondary font-weight-light">
            <p>myemail@email.com</p>
            <span>|</span>
            <p>+00 000 000 0000</p>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <PeopleMemberOf :size="avatarSize" />
        <BtnIcon icon="hugeicons:delete-03" variant="ghost" :size="btnSize" />
      </div>
    </template>
    <template v-else>
      <div class="flex items-center gap-2">
        <Avatar
          :size="avatarSize"
          color="#FFC9C9"
          src="https://picsum.photos/36"
        />
        <div class="flex flex-column gap-2">
          <p class="font-weight-medium">User Name</p>
          <div class="flex gap-1 items-center text-secondary font-weight-light">
            <p class="font-weight-light">Full name</p>
          </div>
        </div>
      </div>
      <div>
        <p class="font-weight-light">Accountant</p>
      </div>
      <div>
        <p class="font-weight-light">myemail@email.com</p>
      </div>
      <div>
        <p class="font-weight-light">+00 000 000 0000</p>
      </div>
      <div class="flex items-center gap-3">
        <PeopleMemberOf :size="avatarSize" />
        <BtnIcon icon="hugeicons:delete-03" variant="ghost" :size="btnSize" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const breakpointsState = useBreakpoints();

const avatarSize = computed(() => {
  if (breakpointsState.value === "s") return 24;
  if (breakpointsState.value === "m") return 28;
  return 32;
});

const btnSize = computed(() => avatarSize.value + 8);
</script>

<style lang="sass" scoped>
.people-card-container
  border-top: 1px solid $border_main_quarternary
  border-bottom: 1px solid $border_main_quarternary

  padding: $spacing-02 $spacing-03
  @include respond-to(m)
    &
      padding: $spacing-02 $spacing-04

  &:not(:last-child)
    border-bottom: 0
</style>
