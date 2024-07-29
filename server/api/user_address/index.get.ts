import { getAddresses } from "./data";

export default defineEventHandler(async (event) => {
  return getAddresses();
});
