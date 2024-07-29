import getHydrationResources from "~/server/getHydrationResources";
import { getUser } from "./data";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw new Error("Missing id");
  }
  const user = await getUser(parseInt(id), {
    resources: await getHydrationResources(),
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
});
