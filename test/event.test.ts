import { getEventIdFromRoundId, getRoundInfoFromWcif, getCutoffByRoundId, getLimitByRoundId, getEventInfoFromWcif } from "../src";
import wcif from "./wcif.json";

describe("getEventIdFromRoundId", () => {
    it("return event id from round id", () => {
        expect(getEventIdFromRoundId("333-r1")).toEqual("333");
    });
});

describe(("getEventInfoFromWcif"), () => {
    it("return event info from wcif", () => {
        const wcifJson = JSON.parse(JSON.stringify(wcif));
        expect(getEventInfoFromWcif("333", wcifJson)).toEqual(wcif.events[0]);
    });
});

describe("getRoundInfoFromWcif", () => {
    it("return round info from wcif", () => {
        const wcifJson = JSON.parse(JSON.stringify(wcif));
        expect(getRoundInfoFromWcif("333-r1", wcifJson)).toEqual(
            wcif.events[0].rounds[0]
        );
    });
});

describe("getCutoffByRoundId", () => {
    it("return cutoff by round id", () => {
        const wcifJson = JSON.parse(JSON.stringify(wcif));
        expect(getCutoffByRoundId("333-r1", wcifJson)).toEqual(null);
    });
});

describe("getLimitByRoundId", () => {
    it("return limit by round id", () => {
        const wcifJson = JSON.parse(JSON.stringify(wcif));
        expect(getLimitByRoundId("333-r1", wcifJson)).toEqual({
            centiseconds: 60000,
            cumulativeRoundIds: [],
        });
    });
});