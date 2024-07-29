import getHydrationResources from "~/server/getHydrationResources";
import { getUsers } from "./data";

export default defineEventHandler(async (event) => {
  return getUsers({ resources: await getHydrationResources() });
});
