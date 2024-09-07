import { Competition } from "@wca/helpers";

export const getEventInfoFromWcif = (eventId: string, wcif: Competition) => {
  return wcif.events.find((event) => event.id === eventId);
};

export const getRoundInfoFromWcif = (roundId: string, wcif: Competition) => {
  const eventId = getEventIdFromRoundId(roundId);
  const event = getEventInfoFromWcif(eventId, wcif);
  return event?.rounds.find((round) => round.id === roundId);
};

export const getEventIdFromRoundId = (roundId: string) => {
  return roundId.split("-")[0];
};

export const getCutoffByRoundId = (roundId: string, wcif: Competition) => {
  const round = getRoundInfoFromWcif(roundId, wcif);
  return round?.cutoff || null;
};

export const getLimitByRoundId = (roundId: string, wcif: Competition) => {
  const round = getRoundInfoFromWcif(roundId, wcif);
  return round?.timeLimit || null;
};

