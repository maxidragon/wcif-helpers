import { Activity, Competition } from "@wca/helpers";

export const getActivityInfoFromSchedule = (
  roundId: string,
  wcif: Competition
) => {
  let activityToReturn: Activity | null = null;
  wcif.schedule.venues.forEach((venue) => {
    venue.rooms.forEach((room) => {
      room.activities.forEach((activity) => {
        if (activity.activityCode === roundId) {
          activityToReturn = activity;
        }
        activity.childActivities.forEach((childActivity) => {
          if (childActivity.activityCode === roundId) {
            activityToReturn = childActivity;
          }
        });
      });
    });
  });
  return activityToReturn;
};

export const prettyRoundFormat = (format: string, cutoffAttempts?: number) => {
    switch (format) {
        case "1":
            return "Best of 1";
        case "2":
            return "Best of 2";
        case "3":
            return "Best of 3";
        case "a":
            if (!cutoffAttempts) {
                return `Average of 5`;
            }
            return `Best of ${cutoffAttempts} / Average of 5`;
        case "m":
            return "Mean of 3";
        default:
            return "Unknown";
    }
};