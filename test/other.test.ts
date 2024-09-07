import { getCompetitionDates } from "../src";

describe("other", () => {
    it("list competition dates correctly", () => {
        expect(getCompetitionDates(new Date("2021-01-01"), 3)).toEqual([
            new Date("2021-01-01"),
            new Date("2021-01-02"),
            new Date("2021-01-03"),
        ]);
    });
});