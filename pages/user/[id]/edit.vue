<template>
  <div>
    <div class="edit-form-container">
      <div class="flex avatar-with-edit">
        <Avatar :size="72" :src="person.image" alt="Pfp" /><BtnIcon
          icon="mage:edit-pen"
          class="edit-btn"
          :size="40"
          :icon-size="12"
        />
      </div>
      <FormKit
        type="form"
        :actions="false"
        @submit="handleSubmit"
        id="form"
        form-class="flex flex-column flex-auto"
      >
        <div class="flex flex-column gap-5 flex-auto">
          <div class="flex flex-auto formkit-intput-row">
            <MyFormInput
              type="text"
              name="fullName"
              label="Full Name"
              validation="required"
              :value="person.fullName"
            />
            <MyFormInput
              class="mx-2"
              type="text"
              name="initials"
              label="Initials"
              :value="person.initials"
            />
          </div>
          <div>
            <MyFormInput
              type="text"
              name="displayName"
              label="Display Name"
              :value="person.displayName"
            />
          </div>
          <div>
            <MyFormInput
              type="text"
              name="functionName"
              label="Role"
              :value="person.functionName"
            />
          </div>
          <div class="flex flex-auto formkit-intput-row">
            <MyFormInput
              type="text"
              name="email"
              label="Email"
              validation="required|email"
              :value="person.email"
            />
            <MyFormInput
              type="tel"
              name="phoneNumber"
              label="Phone Number"
              :value="person.phoneNumber"
            />
          </div>
          <div>
            <MyFormInput
              type="text"
              name="address.addressLineOne"
              label="Street"
              :value="person.address?.addressLineOne"
            />
            <div class="mt-2"></div>
            <MyFormInput
              type="text"
              name="address.addressLineTwo"
              label="Street 2"
              :value="person.address?.addressLineTwo"
            />
          </div>
          <div class="flex flex-auto formkit-intput-row">
            <MyFormInput
              type="text"
              name="address.city"
              label="City"
              :value="person.address?.city"
            />
            <MyFormInput
              type="text"
              name="address.postalCode"
              label="Postal Code"
              :value="person.address?.postalCode"
            />
          </div>
          <div>
            <MyFormInput
              type="text"
              name="address.country"
              label="Country"
              :value="person.address?.country"
            />
          </div>
        </div>
      </FormKit>
    </div>
    <template v-if="breakpoint === 's'">
      <div class="bottom-nav-form-submit">
        <Button @click="handleBack" variant="secondary">Cancel</Button>
        <Button form="form" type="submit" variant="primary" invert
          >Save Changes</Button
        >
      </div>
      <div class="compensator"></div>
    </template>
    <template v-else>
      <div class="edit-form-submit">
        <Button @click="handleBack" variant="secondary">Cancel</Button>
        <Button form="form" type="submit" variant="primary" invert
          >Save Changes</Button
        >
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {
  type UserDTO,
  type UserDTOCreate,
  type UserDTOUpdate,
} from "~/server/api/user/data";
import type { AddressDTOCreate } from "~/server/api/user_address/data";

const route = useRoute();
const router = useRouter();

if (!route.params.id) {
  router.replace("/404");
}

const person = ref(await $fetch<UserDTO>(`/api/user/${route.params.id}`));

interface FormVals {
  "address.addressLineOne": string;
  "address.addressLineTwo": string;
  "address.city": string;
  "address.country": string;
  "address.postalCode": string;
  displayName: string;
  email: string;
  fullName: string;
  functionName: string;
  initials: string;
  phoneNumber: string;
}

const processVals = (
  vals: FormVals
): Omit<UserDTOUpdate, "adressId"> & { address: AddressDTOCreate } => {
  const address: AddressDTOCreate = {};
  for (const key in vals) {
    if (key.includes("address.")) {
      const addressKey = key.replace("address.", "") as keyof AddressDTOCreate;
      const rawKey = key as keyof FormVals;
      address[addressKey] = vals[rawKey];
      delete vals[rawKey];
    }
  }

  return {
    ...person.value,
    ...vals,
    address: {
      ...person.value.address,
      ...address,
    },
  };
};

const handleSubmit = async (vals: any) => {
  const requestBody = processVals(vals);
  await $fetch(`/api/user/${route.params.id}`, {
    method: "PATCH",
    body: requestBody,
  });
  handleBack();
};

const handleBack = () => {
  router.back();
};

const breakpoint = useBreakpoints();
</script>

<style lang="sass">
.edit-form-container
  @extend .flex, .flex-column, .gap-4, .px-3, .py-5, .items-center
  @include respond-to(m)
    &
      flex-direction: row
      align-items: flex-start
      gap: $spacing-05
      padding: $spacing-07 $spacing-05

.avatar-with-edit
  @extend .flex, .items-end
  @include respond-to(m)
    &
      margin-bottom: $spacing-04
.edit-btn
  @extend .bg-primary
  border: 1px solid $border_main_primary
  margin-left: calc(-1 * $spacing-04)

.required-field
  background: red
  &::after
    content: "*"
    margin-left: $spacing-01
    font-weight: 500

.formkit-intput-row > .formkit-outer
  &:not(:last-child)
    margin-right: $spacing-03

.bottom-nav-form-submit
  position: fixed
  z-index: 100
  bottom: 0
  left: 0
  width: 100%
  border: 1px solid $border_main_quarternary
  @extend .flex, .justify-between, .gap-4, .py-3, .px-3, .flex-auto, .bg-secondary
  & > button
    width: 100%
.compensator
  height: 70px

.edit-form-submit
  @extend .flex, .justify-end, .gap-4, .py-3, .px-3, .flex-auto, .bg-secondary
  & > button
    width: 100%
  @include respond-to(l)
    &
      background: $background_main_primary
    & > button
      width: auto
      min-width: 150px
</style>
