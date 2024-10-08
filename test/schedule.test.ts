import { getActivityInfoFromSchedule, getGroupInfoByActivityId, prettyRoundFormat } from "../src";
import wcif from "./wcif.json";

describe("round format", () => {
  it("formats bo1 correctly", () => {
    expect(prettyRoundFormat("1")).toBe("Best of 1");
  });

  it("formats bo2 correctly", () => {
    expect(prettyRoundFormat("2")).toBe("Best of 2");
  });

  it("formats bo3 correctly", () => {
    expect(prettyRoundFormat("3")).toBe("Best of 3");
  });

  it("formats ao5 correctly", () => {
    expect(prettyRoundFormat("a")).toBe("Average of 5");
  });

  it("formats ao5 with cutoff correctly", () => {
    expect(prettyRoundFormat("a", 2)).toBe("Best of 2 / Average of 5");
  });

  it("formats mo3 correctly", () => {
    expect(prettyRoundFormat("m")).toBe("Mean of 3");
  });

  it("return pretty round format for unknown", () => {
    expect(prettyRoundFormat("unknown")).toEqual("Unknown");
  });
});

describe("getActivityInfoFromSchedule", () => {
  it("return activity info from schedule", () => {
    const wcifJson = JSON.parse(JSON.stringify(wcif));
    expect(getActivityInfoFromSchedule("333-r1-g1", wcifJson)).toEqual(
      wcif.schedule.venues[0].rooms[0].activities[0].childActivities[0]
    );
  });
});

describe("getGroupInfoByActivityId", () => {
  it("return group info by activity id", () => {
    const wcifJson = JSON.parse(JSON.stringify(wcif));
    expect(getGroupInfoByActivityId(22, wcifJson)).toEqual(
      wcif.schedule.venues[0].rooms[0].activities[0].childActivities[0]
    );
  });
});