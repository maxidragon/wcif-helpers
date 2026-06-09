import { Competition } from "./types";

export const getPersonFromWcif = (registrantId: number, wcif: Competition) => {
    return wcif.persons.find((person) => person.registrantId === registrantId);
};
