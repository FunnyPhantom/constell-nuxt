import patcher from "~/server/patcher";

export interface Address {
  iri: string;
  id: number;
  addressLineOne?: string;
  addressLineTwo?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  state?: string;
}

export type AddressDTOCreate = Omit<Address, "iri" | "id">;

let counter = 5;
const addresses: Array<Address> = [
  {
    iri: "/api/address/1",
    id: 1,
    addressLineOne: "123 Hoofdstraat",
    city: "Amsterdam",
    postalCode: "1000 AB",
    country: "Netherlands",
    state: "Noord-Holland",
  },
  {
    iri: "/api/address/2",
    id: 2,
    addressLineOne: "456 Kerkstraat",
    city: "Rotterdam",
    postalCode: "3000 CD",
    country: "Netherlands",
    state: "Zuid-Holland",
  },
  {
    iri: "/api/address/3",
    id: 3,
    addressLineOne: "789 Dorpsstraat",
    city: "Utrecht",
    postalCode: "3500 EF",
    country: "Netherlands",
    state: "Utrecht",
  },
  {
    iri: "/api/address/4",
    id: 4,
    addressLineOne: "101 Marktstraat",
    city: "The Hague",
    postalCode: "2500 GH",
    country: "Netherlands",
    state: "Zuid-Holland",
  },
];

export const getAddresses = () => {
  return addresses;
};

export const getAddress = (id: number) => {
  return addresses.find((address) => address.id === id) || null;
};

export const createAddress = (partialAddress: Omit<Address, "iri" | "id">) => {
  const address = { ...partialAddress } as Address;
  address.id = counter++;
  address.iri = `/api/address/${address.id}`;
  addresses.push(address);
  return address;
};

export const updateAddress = (
  id: number,
  partialAddress: Partial<Omit<Address, "iri" | "id">>
) => {
  const address = addresses.find((address) => address.id === id);
  if (!address) {
    return null;
  }

  const { addressLineOne, addressLineTwo, city, country, postalCode, state } =
    partialAddress;
  const updateFields = {
    addressLineOne,
    addressLineTwo,
    city,
    country,
    postalCode,
    state,
  };
  const updatedAddress = patcher(address, updateFields);

  return updatedAddress;
};

export const deleteAddress = (id: number) => {
  const addressIndex = addresses.findIndex((address) => address.id === id);
  if (addressIndex === -1) {
    return false;
  }
  addresses.splice(addressIndex, 1);
  return true;
};
