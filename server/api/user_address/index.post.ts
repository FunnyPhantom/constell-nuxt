import { createAddress } from "./data";

export default defineEventHandler(async (event) => {
  const { addressLineOne, addressLineTwo, city, state, country, postalCode } =
    await readBody(event);

  // Validate the request

  const address = createAddress({
    addressLineOne,
    addressLineTwo,
    city,
    state,
    country,
    postalCode,
  });

  return address;
});
