import { getCompetitionDates, getNumberOfAttemptsForRound } from "../src";
import wcif from "./wcif.json";

describe("other", () => {
    it("list competition dates correctly", () => {
        expect(getCompetitionDates(new Date("2021-01-01"), 3)).toEqual([
            new Date("2021-01-01"),
            new Date("2021-01-02"),
            new Date("2021-01-03"),
        ]);
    });
});

describe("getNumberOfAttemptsForRound", () => {
    it("return number of attempts for round if ao5", () => {
        const wcifJson = JSON.parse(JSON.stringify(wcif));
        expect(getNumberOfAttemptsForRound("333-r1", wcifJson)).toEqual(5);
    });
    it("return number of attempts for round if mo3", () => {
        const wcifJson = JSON.parse(JSON.stringify(wcif));
        expect(getNumberOfAttemptsForRound("666-r1", wcifJson)).toEqual(3);
    });
});