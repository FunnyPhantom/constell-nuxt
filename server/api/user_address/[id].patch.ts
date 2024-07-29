import { updateAddress } from "./data";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw new Error("Missing id");
  }
  const { addressLineOne, addressLineTwo, city, state, country, postalCode } =
    await readBody(event);
  const userAddress = await updateAddress(parseInt(id), {
    addressLineOne,
    addressLineTwo,
    city,
    state,
    country,
    postalCode,
  });
  if (!userAddress) {
    throw new Error("User address not found");
  }
  return userAddress;
});
