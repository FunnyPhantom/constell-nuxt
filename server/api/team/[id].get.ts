import { getTeam } from "./data";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw new Error("Missing id");
  }
  const team = await getTeam(parseInt(id));
  if (!team) {
    throw new Error("Team not found");
  }
  return team;
});
