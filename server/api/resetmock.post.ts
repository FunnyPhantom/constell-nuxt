import { resetUsers } from "~/server/api/user/data";
import { resetTeams } from "~/server/api/team/data";
import { resetAddresses } from "~/server/api/user_address/data";

export default defineEventHandler(async (event) => {
  resetUsers();
  resetTeams();
  resetAddresses();

  return {
    status: 204,
  };
});
