import { deleteUser } from "./data";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw new Error("Missing id");
  }
  const result = await deleteUser(parseInt(id));
  if (!result) {
    throw new Error("User not found");
  }
  return result;
});
