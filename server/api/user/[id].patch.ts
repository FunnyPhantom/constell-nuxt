import { Address } from "~/server/api/user_address/data";
import { updateUser } from "./data";
import getHydrationResources from "~/server/getHydrationResources";

export default defineEventHandler(async (event) => {
  const id = await getRouterParam(event, "id");
  if (!id) {
    throw new Error("Missing id");
  }
  const {
    address,
    email,
    displayName,
    fullName,
    functionName,
    image,
    initials,
    isEmployee,
    phoneCountryPrefix,
    phoneNumber,
  } = await readBody(event);

  let addressId: number | undefined;
  if (address) {
    const { id } = await $fetch<Address>(`/api/user_address/${address.id}`, {
      method: "PATCH",
      body: address,
    });
    addressId = id;
  }

  const user = await updateUser(
    parseInt(id),
    {
      addressId,
      email,
      displayName,
      fullName,
      functionName,
      image,
      initials,
      isEmployee,
      phoneCountryPrefix,
      phoneNumber,
    },
    { resources: await getHydrationResources() }
  );
  if (!user) {
    throw new Error("User not found");
  }
  return user;
});
