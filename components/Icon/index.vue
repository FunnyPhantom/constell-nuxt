<template>
  <component
    v-if="isInternalIcon"
    :is="internalIcons[props.icon as InternalIconNames]"
    :width="internalIconWidth"
    :height="internalIconHeight"
    :class="props.class"
  />
  <IconifyIcon
    v-else
    :icon="props.icon"
    :width="props.width"
    :height="props.height"
    :class="props.class"
  />
</template>

<script lang="ts" setup>
import { Icon as IconifyIcon } from "@iconify/vue";
import Events from "./Events.vue";
import EventsOutlined from "./EventsOutlined.vue";
import Contacts from "./Contacts.vue";
import ContactsOutlined from "./ContactsOutlined.vue";
import Finances from "./Finances.vue";
import FinancesOutlined from "./FinancesOutlined.vue";
import Venue from "./Venue.vue";
import VenueOutlined from "./VenueOutlined.vue";
import Today from "./Today.vue";
import TodayOutlined from "./TodayOutlined.vue";
import type { PropType } from "vue";

type InternalIconNames =
  | "internal:events"
  | "internal:events-outline"
  | "internal:contact"
  | "internal:contact-outline"
  | "internal:finances"
  | "internal:finances-outline"
  | "internal:venue"
  | "internal:venue-outline"
  | "internal:today"
  | "internal:today-outline";
type InternalIconTypes =
  | typeof Events
  | typeof EventsOutlined
  | typeof Contacts
  | typeof ContactsOutlined
  | typeof Finances
  | typeof FinancesOutlined
  | typeof Venue
  | typeof VenueOutlined
  | typeof Today
  | typeof TodayOutlined;

type InternalIconsMap = Record<InternalIconNames, InternalIconTypes>;

const internalIcons: InternalIconsMap = {
  "internal:events": Events,
  "internal:events-outline": EventsOutlined,
  "internal:contact": Contacts,
  "internal:contact-outline": ContactsOutlined,
  "internal:finances": Finances,
  "internal:finances-outline": FinancesOutlined,
  "internal:venue": Venue,
  "internal:venue-outline": VenueOutlined,
  "internal:today": Today,
  "internal:today-outline": TodayOutlined,
};

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  width: {
    type: Number as PropType<number | string>,
    default: 24,
  },
  height: {
    type: Number as PropType<number | string>,
    default: 24,
  },
  class: {
    type: String,
    default: "",
  },
});

const isInternalIcon = computed(() => {
  return Object.keys(internalIcons).includes(props.icon);
});

const internalIconFactor = 40 / 24;
const internalIconWidth = computed(() => {
  const width: number =
    typeof props.width === "number"
      ? props.width
      : typeof props.width === "string"
      ? parseInt(props.width, 10)
      : 24;

  return width * internalIconFactor;
});

const internalIconHeight = computed(() => {
  const height: number =
    typeof props.height === "number"
      ? props.height
      : typeof props.height === "string"
      ? parseInt(props.height, 10)
      : 24;

  return height * internalIconFactor;
});
</script>

<style></style>
