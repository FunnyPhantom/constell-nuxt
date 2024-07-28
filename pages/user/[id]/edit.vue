<template>
  <div>
    <div class="edit-form-container">
      <div class="flex avatar-with-edit">
        <Avatar
          :size="72"
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt="Pfp"
        /><BtnIcon
          icon="mage:edit-pen"
          class="edit-btn"
          :size="40"
          :icon-size="12"
        />
      </div>
      <FormKit
        type="form"
        :actions="false"
        @submit="submit"
        form-class="flex flex-column flex-auto"
      >
        <div class="flex flex-column gap-5 flex-auto">
          <div class="flex flex-auto formkit-intput-row">
            <MyFormInput
              type="text"
              name="fullName"
              label="Full Name"
              validation="required"
            />
            <MyFormInput
              class="mx-2"
              type="text"
              name="initials"
              label="Initials"
            />
          </div>
          <div>
            <MyFormInput type="text" name="displayName" label="Display Name" />
          </div>
          <div>
            <MyFormInput type="text" name="role" label="Role" />
          </div>
          <div class="flex flex-auto formkit-intput-row">
            <MyFormInput
              type="text"
              name="email"
              label="Email"
              validation="required|email"
            />
            <MyFormInput type="tel" name="phone" label="Phone Number" />
          </div>
          <div>
            <MyFormInput type="text" name="street1" label="Street" />
            <div class="mt-2"></div>
            <MyFormInput type="text" name="street2" />
          </div>
          <div class="flex flex-auto formkit-intput-row">
            <MyFormInput type="text" name="city" label="City" />
            <MyFormInput type="text" name="postalCode" label="Postal Code" />
          </div>
          <div>
            <MyFormInput type="text" name="country" label="Country" />
          </div>
        </div>
      </FormKit>
    </div>
    <template v-if="breakpoint === 's'">
      <div class="bottom-nav-form-submit">
        <Button form="form" variant="secondary">Cancel</Button>
        <Button type="submit" variant="primary" invert>Save Changes</Button>
      </div>
      <div class="compensator"></div>
    </template>
    <template v-else>
      <div class="edit-form-submit">
        <Button form="form" variant="secondary">Cancel</Button>
        <Button type="submit" variant="primary" invert>Save Changes</Button>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

if (!route.params.id) {
  navigateTo("/404");
}

const submit = () => {
  console.log("submit");
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
