import { createTeam } from "./data";

export default defineEventHandler(async (event) => {
  const { name, color, abbreviation } = await readBody(event);
  // validation goes here
  const team = createTeam({ name, color, abbreviation, teamPermissions: [] });
  return team;
});
