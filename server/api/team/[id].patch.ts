// write the code to update the team

import { updateTeam } from "./data";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw new Error("Missing id");
  }
  const { name, color, abbreviation } = await readBody(event);
  // validation goes here
  const team = updateTeam(parseInt(id), { name, color, abbreviation });
  if (!team) {
    throw new Error("Team not found");
  }
  return team;
});
