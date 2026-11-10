export const dimensionIds = ["SE", "AI", "PF", "CO"] as const;

export type DimensionId = (typeof dimensionIds)[number];

export const responseValues = [-2, -1, 0, 1, 2] as const;
export const anchorResponseValues = [-2, -1, 1, 2] as const;

export type ResponseValue = (typeof responseValues)[number];
export type AnchorResponseValue = (typeof anchorResponseValues)[number];

export type QuestionId =
  | "SE1"
  | "SE2"
  | "SE3"
  | "SE4"
  | "AI1"
  | "AI2"
  | "AI3"
  | "AI4"
  | "PF1"
  | "PF2"
  | "PF3"
  | "PF4"
  | "CO1"
  | "CO2"
  | "CO3"
  | "CO4";

export type PersonalityCode =
  | "SAPC"
  | "SAPO"
  | "SAFC"
  | "SAFO"
  | "SIPC"
  | "SIPO"
  | "SIFC"
  | "SIFO"
  | "EAPC"
  | "EAPO"
  | "EAFC"
  | "EAFO"
  | "EIPC"
  | "EIPO"
  | "EIFC"
  | "EIFO";

export type PersonalityFamilyCode = "SA" | "SI" | "EA" | "EI";
export type PoleLetter = "S" | "E" | "A" | "I" | "P" | "F" | "C" | "O";
export type QuestionFormat = "agreement" | "scenario";
export type ScoringMode = "agreement" | "direct";

export interface ResponseOption {
  readonly label: string;
  readonly value: ResponseValue;
}

export interface AssessmentQuestion {
  readonly id: QuestionId;
  readonly text: string;
  readonly format: QuestionFormat;
  readonly scoringMode: ScoringMode;
  readonly dimension: DimensionId;
  readonly directionalKey: PoleLetter;
  readonly reverse: boolean;
  readonly anchor: boolean;
  readonly responseOptions: readonly ResponseOption[];
}

export interface DimensionDefinition {
  readonly id: DimensionId;
  readonly firstLetter: PoleLetter;
  readonly firstLabel: string;
  readonly secondLetter: PoleLetter;
  readonly secondLabel: string;
}

export interface PersonalityFamily {
  readonly code: PersonalityFamilyCode;
  readonly name: string;
  readonly description: string;
}

export interface PersonalityRecord {
  readonly code: PersonalityCode;
  readonly name: string;
  readonly family: PersonalityFamily;
  readonly description: string;
  readonly strengths: readonly string[];
  readonly blindSpots: readonly string[];
  readonly growthSuggestions: readonly string[];
}

export type QualitativeBand = "balanced" | "nearly-balanced" | "moderate-lean" | "stronger-lean";

export interface QualitativeInterpretation {
  readonly band: QualitativeBand;
  readonly label: "Balanced" | "Nearly balanced" | "Moderate lean" | "Stronger lean";
  readonly explanation: string;
}

export interface QuestionContribution {
  readonly questionId: QuestionId;
  readonly questionText: string;
  readonly questionFormat: QuestionFormat;
  readonly originalResponse: ResponseValue;
  readonly selectedAnswer: string;
  readonly reverseScored: boolean;
  readonly scoringMultiplier: 1 | -1;
  readonly scoredContribution: number;
}

export interface LimitedResponseNotice {
  readonly applies: boolean;
  readonly neutralResponseCount: number;
  readonly explanation: string | null;
}

export interface DimensionScore {
  readonly dimension: DimensionId;
  readonly questionIds: readonly QuestionId[];
  readonly contributions: readonly QuestionContribution[];
  readonly total: number;
  readonly interpretation: QualitativeInterpretation;
  readonly assignedLetter: PoleLetter;
  readonly anchorQuestionId: QuestionId;
  readonly anchorTiebreakerApplied: boolean;
  readonly limitedResponse: LimitedResponseNotice;
}

export interface AssessmentResult {
  readonly code: PersonalityCode;
  readonly personality: PersonalityRecord;
  readonly dimensions: Readonly<Record<DimensionId, DimensionScore>>;
}

export type ValidationIssueReason =
  | "missing-answer"
  | "invalid-response"
  | "anchor-neutral"
  | "unknown-question";

export interface ValidationIssue {
  readonly questionId: string;
  readonly reason: ValidationIssueReason;
  readonly message: string;
}
