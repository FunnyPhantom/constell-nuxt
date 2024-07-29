import getHydrationResources from "~/server/getHydrationResources";
import { Address } from "../user_address/data";
import { createUser } from "./data";

export default defineEventHandler(async (event) => {
  const {
    fullName,
    email,
    address,
    isEmployee,
    displayName,
    functionName,
    image,
    initials,
    phoneCountryPrefix,
    phoneNumber,
  } = await readBody(event);

  const { id: addressId } = await $fetch<Address>("/api/user_address", {
    method: "POST",
    body: JSON.stringify(address ?? {}),
  });

  const addresses = await $fetch<Address[]>("/api/user_address");
  const teams = await $fetch("/api/team");

  // validation goes here
  const user = createUser(
    {
      fullName,
      email,
      addressId,
      isEmployee,
      teamIds: [1, 2, 3],
      displayName,
      functionName,
      image,
      initials,
      phoneCountryPrefix,
      phoneNumber,
    },
    { resources: await getHydrationResources() }
  );
  return user;
});
