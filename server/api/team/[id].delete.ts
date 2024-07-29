import { deleteTeam, getTeam } from "./data";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw new Error("Missing id");
  }

  const result = deleteTeam(parseInt(id));

  if (!result) {
    throw new Error("Team not found");
  }
  return result;
});
