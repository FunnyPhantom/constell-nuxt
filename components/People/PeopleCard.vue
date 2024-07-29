<template>
  <NuxtLink custom v-slot="{ navigate }" :to="linkTo">
    <div
      class="people-card-container flex items-center justify-between text-sm"
      @click="navigate"
    >
      <template v-if="breakpointsState === 's'">
        <div class="flex items-center gap-2">
          <Avatar :size="avatarSize" :src="person.image" />
          <div class="flex flex-column gap-1">
            <div class="flex gap-2">
              <p class="font-weight-medium">{{ person.displayName }}</p>
              <p class="font-weight-light">{{ person.functionName }}</p>
            </div>
            <p class="text-secondary font-weight-light">
              {{ formattedPhoneNumber }}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <PeopleMemberOf :size="avatarSize" :teams="person.teams" />
          <BtnIcon
            @click="handleDelete"
            icon="hugeicons:delete-03"
            variant="ghost"
            :size="btnSize"
          />
        </div>
      </template>
      <template v-else-if="breakpointsState === 'm'">
        <div class="flex items-center gap-2">
          <Avatar :size="avatarSize" :src="person.image" />
          <div class="flex flex-column gap-1">
            <div class="flex gap-2">
              <p class="font-weight-medium">{{ person.displayName }}</p>
              <p class="font-weight-light">{{ person.functionName }}</p>
            </div>
            <div
              class="flex gap-1 items-center text-secondary font-weight-light"
            >
              <p>{{ person.email }}</p>
              <span>|</span>
              <p>{{ formattedPhoneNumber }}</p>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <PeopleMemberOf :size="avatarSize" :teams="person.teams" />
          <BtnIcon
            @click="handleDelete"
            icon="hugeicons:delete-03"
            variant="ghost"
            :size="btnSize"
          />
        </div>
      </template>
      <template v-else>
        <div class="flex items-center gap-2">
          <Avatar :size="avatarSize" :src="person.image" />
          <div class="flex flex-column gap-2">
            <p class="font-weight-medium">{{ person.displayName }}</p>
            <div
              class="flex gap-1 items-center text-secondary font-weight-light"
            >
              <p class="font-weight-light">{{ person.fullName }}</p>
            </div>
          </div>
        </div>
        <div>
          <p class="font-weight-light">{{ person.functionName }}</p>
        </div>
        <div>
          <p class="font-weight-light">{{ person.email }}</p>
        </div>
        <div>
          <p class="font-weight-light">{{ formattedPhoneNumber }}</p>
        </div>
        <div class="flex items-center gap-3">
          <PeopleMemberOf :size="avatarSize" :teams="person.teams" />
          <BtnIcon
            @click="handleDelete"
            icon="hugeicons:delete-03"
            variant="ghost"
            :size="btnSize"
          />
        </div>
      </template>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { UserDTO } from "~/server/api/user/data";

const breakpointsState = useBreakpoints();

const avatarSize = computed(() => {
  if (breakpointsState.value === "s") return 24;
  if (breakpointsState.value === "m") return 28;
  return 32;
});

const btnSize = computed(() => avatarSize.value + 8);

const linkTo = computed(() => `/user/${props.person.id}/edit`);

const props = defineProps({
  person: {
    type: Object as PropType<UserDTO>,
    required: true,
  },
});

const formattedPhoneNumber = computed(() => {
  const phoneNumber = props.person.phoneNumber ?? "";
  const prefix = props.person.phoneCountryPrefix;
  return `${prefix} ${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
    1,
    3
  )} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(
    7,
    9
  )}`;
});

const emit = defineEmits(["delete"]);

const handleDelete = async (e: Event) => {
  e.stopPropagation();
  try {
    const result = await $fetch(`/api/user/${props.person.id}`, {
      method: "DELETE",
    });
    if (result) {
      emit("delete", props.person.id);
    }
  } catch (error) {
    console.error(error);
  }
};
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
