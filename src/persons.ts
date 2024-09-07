import { Competition } from "@wca/helpers";

export const getPersonFromWcif = (registrantId: number, wcif: Competition) => {
    return wcif.persons.find((person) => person.registrantId === registrantId);
};
