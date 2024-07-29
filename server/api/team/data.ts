let counter = 4;
export interface Team {
  iri: string;
  id: number;
  name: string;
  color: string;
  abbreviation: string;
  teamPermissions: string[];
}

type TeamDTO = Omit<Team, "iri" | "id">;

const teams: Array<Team> = [
  {
    iri: "/api/team/1",
    id: 1,
    name: "Management",
    abbreviation: "M",
    color: "#FFC9C9",
    teamPermissions: [],
  },
  {
    iri: "/api/team/2",
    id: 2,
    name: "Front of the house",
    abbreviation: "F",
    color: "#A5A4D4",
    teamPermissions: [],
  },
  {
    iri: "/api/team/3",
    id: 3,
    name: "Back of the house",
    abbreviation: "B",
    color: "#C1E0B9",
    teamPermissions: [],
  },
];

export const getTeams = () => {
  return teams;
};

export const getTeam = (id: number) => {
  return teams.find((team) => team.id === id) || null;
};

export const createTeam = (partialTeam: TeamDTO) => {
  const team = { ...partialTeam } as Team;
  counter++;
  team.id = counter;
  team.iri = `/api/team/${counter}`;
  teams.push(team);
  return team;
};

export const updateTeam = (id: number, partialTeam: Partial<TeamDTO>) => {
  const team = teams.find((team) => team.id === id);
  if (!team) {
    return null;
  }
  Object.assign(team, partialTeam);
  return team;
};

export const deleteTeam = (id: number) => {
  const index = teams.findIndex((team) => team.id === id);
  if (index === -1) {
    return false;
  }
  teams.splice(index, 1);
  return true;
};
