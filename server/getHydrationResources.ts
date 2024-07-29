import { Team } from "~/server/api/team/data";
import { Address } from "~/server/api/user_address/data";

export default async function getHydrationResources() {
  const teams = await $fetch<Array<Team>>("/api/team", {
    parseResponse: JSON.parse,
  });
  const addresses = await $fetch<Array<Address>>("/api/user_address", {
    parseResponse: JSON.parse,
  });
  return {
    teams,
    addresses,
  };
}
