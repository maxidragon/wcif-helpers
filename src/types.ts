// WCIF v2.1.1 - https://github.com/thewca/wcif/blob/latest/specification.md

export type CountryCode = string;
export type CurrencyCode = string;
export type ResultValue = number;
export type Scramble = string;
export type ActivityCode = string;

export type Role = "delegate" | "trainee-delegate" | "organizer" | string;

export type AssignmentCode =
  | "competitor"
  | "staff-judge"
  | "staff-scrambler"
  | "staff-runner"
  | "staff-dataentry"
  | "staff-announcer"
  | string;

export type RoundFormat = "1" | "2" | "3" | "5" | "a" | "m" | "h";

export interface Extension {
  id: string;
  specUrl: string;
  data: Record<string, unknown>;
}

export interface Avatar {
  url: string;
  thumbUrl: string;
}

export interface Assignment {
  activityId: number;
  assignmentCode: AssignmentCode;
  stationNumber: number | null;
}

export interface PersonalBest {
  eventId: string;
  value: ResultValue;
  type: "single" | "average";
  worldRanking: number;
  continentalRanking: number;
  nationalRanking: number;
}

export interface Registration {
  wcaRegistrationId: number;
  eventIds: string[];
  status: "accepted" | "pending" | "deleted";
  guests: number;
  comments: string;
  administrativeNotes: string;
  isCompeting: boolean;
}

export interface Person {
  registrantId: number;
  name: string;
  wcaUserId: number;
  wcaId: string | null;
  countryIso2: CountryCode;
  gender: "m" | "f" | "o";
  birthdate: string;
  email: string;
  avatar: Avatar | null;
  roles: Role[];
  registration: Registration | null;
  assignments: Assignment[];
  personalBests: PersonalBest[];
  extensions: Extension[];
}

export interface TimeLimit {
  centiseconds: number;
  cumulativeRoundIds: string[];
}

export interface Cutoff {
  numberOfAttempts: number;
  resultValue: ResultValue;
}

export type ResultCondition =
  | {
      type: "resultAchieved";
      scope: "single" | "average";
      value: ResultValue | null;
    }
  | {
      type: "ranking";
      scope: "single" | "average";
      value: number;
    }
  | {
      type: "percent";
      scope: "single" | "average";
      value: number;
    };

export type ParticipationSource =
  | { type: "registrations" }
  | { type: "round"; roundId: string; resultCondition: ResultCondition }
  | { type: "linkedRounds"; roundIds: string[]; resultCondition: ResultCondition };

export interface ReservedPlaces {
  nationalities: CountryCode[];
  count: number;
}

export interface ParticipationRuleset {
  participationSource: ParticipationSource | null;
  reservedPlaces: ReservedPlaces | null;
}

export interface Qualification {
  earliestResultDate: string | null;
  latestResultDate: string;
  resultCondition: ResultCondition;
}

export interface Attempt {
  value: ResultValue;
  reconstruction: string | null;
}

export interface Result {
  personId: number;
  ranking: number | null;
  attempts: Attempt[];
  best: ResultValue;
  average: ResultValue;
}

export interface ScrambleSet {
  id: number;
  scrambles: Scramble[];
  extraScrambles: Scramble[];
}

export interface Round {
  id: string;
  linkedRounds: string[] | null;
  format: RoundFormat;
  timeLimit: TimeLimit | null;
  cutoff: Cutoff | null;
  participationRuleset: ParticipationRuleset | null;
  results: Result[];
  scrambleSetCount: number;
  scrambleSets: ScrambleSet[];
  extensions: Extension[];
}

export interface Event {
  id: string;
  rounds: Round[];
  competitorLimit: number | null;
  qualification: Qualification | null;
  extensions: Extension[];
}

export interface Activity {
  id: number;
  name: string;
  activityCode: ActivityCode;
  startTime: string;
  endTime: string;
  childActivities: Activity[];
  scrambleSetId: number | null;
  extensions: Extension[];
}

export interface Room {
  id: number;
  name: string;
  color: string;
  activities: Activity[];
  extensions: Extension[];
}

export interface Venue {
  id: number;
  name: string;
  latitudeMicrodegrees: number;
  longitudeMicrodegrees: number;
  countryIso2: CountryCode;
  timezone: string;
  rooms: Room[];
  extensions: Extension[];
}

export interface Schedule {
  startDate: string;
  numberOfDays: number;
  venues: Venue[];
}

export interface RegistrationInfo {
  openTime: string;
  closeTime: string;
  baseEntryFee: number;
  currencyCode: CurrencyCode;
  onTheSpotRegistration: boolean;
  useWcaRegistration: boolean;
}

export interface Series {
  id: string;
  name: string;
  shortName: string;
  competitionIds: string[];
}

export interface Competition {
  formatVersion: string;
  id: string;
  name: string;
  shortName: string;
  series: Series | null;
  persons: Person[];
  events: Event[];
  schedule: Schedule;
  registrationInfo: RegistrationInfo;
  competitorLimit: number | null;
  extensions: Extension[];
}
