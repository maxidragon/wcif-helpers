import { Competition } from "./types";
import { getRoundInfoFromWcif } from "./events";

export const getNumberOfAttemptsForRound = (
  roundId: string,
  wcif: Competition
): number => {
  const round = getRoundInfoFromWcif(roundId, wcif);
  if (!round) return 0;
  switch (round.format) {
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "5":
      return 5;
    case "a":
      return 5;
    case "m":
      return 3;
    case "h":
      return 5;
    default:
      return 0;
  }
};
export const getCompetitionDates = (startDate: Date, numberOfDays: number) => {
    const dates: Date[] = [];
    for (let i = 0; i < numberOfDays; i++) {
        dates.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
    }
    return dates;
};