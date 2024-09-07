import { prettyRoundFormat } from "../src";

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
});
