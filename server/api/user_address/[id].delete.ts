import { deleteAddress } from "./data";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw new Error("Missing id");
  }
  const address = await deleteAddress(parseInt(id));
  if (!address) {
    throw new Error("User address not found");
  }
  return address;
});
