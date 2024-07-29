import { Team } from "~/server/api/team/data";
import { Address } from "~/server/api/user_address/data";

export interface User {
  iri: string;
  id: number;
  fullName: string;
  displayName?: string;
  initials?: string;
  email: string;
  phoneNumber?: string;
  phoneCountryPrefix?: string;
  teamIds: Array<number>;
  image?: string;
  addressId: number;
  isEmployee: boolean;
  functionName?: string;
  userPermissions: Array<string>;
}

export type UserDTO = Omit<User, "iri" | "id" | "addressId" | "teamIds"> & {
  address: Address | null;
  teams: Array<Team>;
};
export type UserDTOCreate = Omit<
  UserDTO,
  "address" | "teams" | "userPermissions"
> & {
  addressId: number;
  teamIds: Array<number>;
};
export type UserDTOUpdate = Partial<UserDTOCreate>;

let counter = 5;
const users: Array<User> = [
  {
    iri: "/api/user/1",
    id: 1,
    fullName: "John Doe",
    email: "johnDoes@gmail.com",
    teamIds: [1, 2, 3],
    isEmployee: true,
    userPermissions: [],
    displayName: "Johnnny Doe",
    initials: "JD",
    phoneNumber: "123456789",
    phoneCountryPrefix: "+1",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    functionName: "Manager",
    addressId: 1,
  },
  {
    iri: "/api/user/2",
    id: 2,
    fullName: "Jane Doe",
    email: "janeDoe@gmail.com",
    teamIds: [1, 2, 3],
    isEmployee: true,
    userPermissions: [],
    displayName: "Janeeeey Doe",
    initials: "JD",
    phoneNumber: "123456789",
    phoneCountryPrefix: "+1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    functionName: "Manager",
    addressId: 1,
  },
  {
    iri: "/api/user/3",
    id: 3,
    fullName: "Yo Dada",
    email: "yodada@gmail.com",
    teamIds: [1, 2, 3],
    isEmployee: true,
    userPermissions: [],
    displayName: "Yoda",
    initials: "YD",
    phoneNumber: "987654321",
    phoneCountryPrefix: "+1",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
    addressId: 2,
    functionName: "Yo Manager",
  },
  {
    iri: "/api/user/4",
    id: 4,
    fullName: "Moha Mova",
    email: "mohamova@gmail.com",
    teamIds: [2, 3],
    isEmployee: true,
    userPermissions: [],
    displayName: "Moha",
    initials: "MM",
    phoneNumber: "432156789",
    phoneCountryPrefix: "+31",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
    addressId: 3,
    functionName: "Bug Catcher 🪲",
  },
  {
    iri: "/api/user/5",
    id: 5,
    fullName: "Lara Croft",
    email: "laracroft@gmail.com",
    teamIds: [1, 2],
    isEmployee: true,
    userPermissions: [],
    displayName: "Tomb Raider",
    initials: "LC",
    phoneNumber: "999999999",
    phoneCountryPrefix: "+999",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
    addressId: 4,
    functionName: "Explorer 🥾",
  },
];

const hydrateUser = (
  user: User,
  resources: { teams: Array<Team>; addresses: Array<Address> }
): UserDTO => {
  const address =
    resources.addresses.find((address) => address.id === user.addressId) ??
    null;
  const belongingTeams = resources.teams.filter((team) =>
    user.teamIds.includes(team.id)
  );
  return { ...user, address, teams: belongingTeams };
};

type UserFunctionOptions = {
  hydrate?: boolean;
  resources?: { teams: Array<Team>; addresses: Array<Address> };
};

const defaultOptions: UserFunctionOptions = {
  hydrate: true,
};
const getOptions = (options?: UserFunctionOptions): UserFunctionOptions => {
  return { ...defaultOptions, ...options };
};

export const getUsers = async (
  options?: UserFunctionOptions
): Promise<Array<UserDTO>> => {
  const { hydrate, resources } = getOptions(options);
  if (!hydrate) {
    return users.map((user) => {
      return {
        ...user,
        address: null,
        teams: [],
      };
    });
  }
  if (!resources) {
    throw new Error("Resources are required for hydration");
  }
  return users.map((user) => {
    return hydrateUser(user, resources);
  });
};

export const getUser = async (
  id: number,
  options?: UserFunctionOptions
): Promise<UserDTO | null> => {
  const { hydrate, resources } = getOptions(options);

  const user = users.find((user) => user.id === id);
  if (!user) {
    return null;
  }

  if (!hydrate) {
    return {
      ...user,
      address: null,
      teams: [],
    };
  }
  if (!resources) {
    throw new Error("Resources are required for hydration");
  }

  return hydrateUser(user, resources);
};

export const createUser = async (
  userData: UserDTOCreate,
  options?: UserFunctionOptions
): Promise<UserDTO> => {
  const { hydrate, resources } = getOptions(options);

  const {
    addressId,
    email,
    fullName,
    isEmployee,
    teamIds,
    displayName,
    functionName,
    image,
    initials,
    phoneCountryPrefix,
    phoneNumber,
  } = userData;

  // validation goes here

  const user: User = {
    id: ++counter,
    iri: `/api/user/${counter}`,

    addressId,
    email,
    fullName,
    isEmployee,
    teamIds,
    displayName,
    functionName,
    image,
    initials,
    phoneCountryPrefix,
    phoneNumber,
    userPermissions: [],
  };

  users.push(user);

  if (!hydrate) {
    return { ...user, address: null, teams: [] };
  }

  if (!resources) {
    throw new Error("Resources are required for hydration");
  }

  return hydrateUser(user, resources);
};

export const updateUser = async (
  userId: number,
  partialUser: UserDTOUpdate,
  options?: UserFunctionOptions
): Promise<UserDTO | null> => {
  const { hydrate, resources } = getOptions(options);
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return null;
  }

  const {
    displayName,
    email,
    fullName,
    functionName,
    image,
    initials,
    isEmployee,
    phoneCountryPrefix,
    phoneNumber,
    addressId,
    teamIds,
  } = partialUser;

  const updatedField = {
    displayName,
    email,
    fullName,
    functionName,
    image,
    initials,
    isEmployee,
    phoneCountryPrefix,
    phoneNumber,
    teamIds,
    addressId,
  };

  const updatedUser = Object.assign(user, updatedField);

  if (!hydrate) {
    return { ...updatedUser, address: null, teams: [] };
  }
  if (!resources) {
    throw new Error("Resources are required for hydration");
  }

  return hydrateUser(updatedUser, resources);
};

export const deleteUser = async (userId: number): Promise<boolean> => {
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return false;
  }

  users.splice(userIndex, 1);

  return true;
};
