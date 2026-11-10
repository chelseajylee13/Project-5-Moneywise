import type {
  PersonalityCode,
  PersonalityFamily,
  PersonalityFamilyCode,
  PersonalityRecord,
} from "../../domain/assessment/types";

export const personalityFamilies: Readonly<Record<PersonalityFamilyCode, PersonalityFamily>> = {
  SA: {
    code: "SA",
    name: "Measured Builders",
    description:
      "Security-focused and analytical. This family tends to protect stability through evidence, comparison, and deliberate trade-offs.",
  },
  SI: {
    code: "SI",
    name: "Steady Guides",
    description:
      "Security-focused and intuitive. This family tends to protect stability through values, lived experience, and awareness of what feels sustainable.",
  },
  EA: {
    code: "EA",
    name: "Intentional Explorers",
    description:
      "Experience-focused and analytical. This family tends to pursue meaningful possibilities through research, design, and explicit trade-offs.",
  },
  EI: {
    code: "EI",
    name: "Responsive Pioneers",
    description:
      "Experience-focused and intuitive. This family tends to value possibility, personal meaning, and responsiveness to the moment.",
  },
};

export const personalityRecords: Readonly<Record<PersonalityCode, PersonalityRecord>> = {
  SAPC: {
    code: "SAPC",
    name: "The Method Maker",
    family: personalityFamilies.SA,
    description: "Builds orderly financial foundations and prefers well-tested plans.",
    strengths: ["Preparation", "Consistency", "Careful comparison"],
    blindSpots: ["May delay action while seeking certainty", "May resist useful change"],
    growthSuggestions: ["Compare retirement-account structures", "Test paycheck assumptions"],
  },
  SAPO: {
    code: "SAPO",
    name: "The Strategist",
    family: personalityFamilies.SA,
    description:
      "Uses structure and research to pursue promising new options without losing sight of security.",
    strengths: ["Long-range thinking", "Informed experimentation"],
    blindSpots: ["May overengineer decisions", "May underestimate emotional priorities"],
    growthSuggestions: ["Explore compound-growth assumptions", "Compare account trade-offs"],
  },
  SAFC: {
    code: "SAFC",
    name: "The Calibrator",
    family: personalityFamilies.SA,
    description: "Protects stability while adjusting plans as new facts appear.",
    strengths: ["Practical analysis", "Measured flexibility"],
    blindSpots: ["May repeatedly revise instead of committing", "May focus heavily on downside"],
    growthSuggestions: ["Practice paycheck trade-offs", "Examine how match rules change outcomes"],
  },
  SAFO: {
    code: "SAFO",
    name: "The Refiner",
    family: personalityFamilies.SA,
    description: "Looks for flexible, evidence-based ways to improve financial outcomes.",
    strengths: ["Resourcefulness", "Comparison", "Adaptive problem-solving"],
    blindSpots: ["May chase marginal improvements", "May make simple choices feel complex"],
    growthSuggestions: ["Test employer-match scenarios", "Vary compound-growth inputs"],
  },
  SIPC: {
    code: "SIPC",
    name: "The Steward",
    family: personalityFamilies.SI,
    description: "Follows a steady plan and treats money as something to protect with care.",
    strengths: ["Reliability", "Patience", "Responsibility"],
    blindSpots: [
      "May avoid unfamiliar options",
      "May rely on comfortable rules without comparing them",
    ],
    growthSuggestions: [
      "Learn paycheck and deduction basics",
      "Compare traditional and Roth structures",
    ],
  },
  SIPO: {
    code: "SIPO",
    name: "The Wayfinder",
    family: personalityFamilies.SI,
    description: "Uses a clear plan and personal judgment to explore opportunities selectively.",
    strengths: ["Purpose", "Commitment", "Thoughtful courage"],
    blindSpots: [
      "May become attached to an initial direction",
      "May overlook disconfirming details",
    ],
    growthSuggestions: [
      "Compare retirement accounts",
      "Test long-term projections and assumptions",
    ],
  },
  SIFC: {
    code: "SIFC",
    name: "The Anchor",
    family: personalityFamilies.SI,
    description: "Maintains a sense of security while adapting gently to changing circumstances.",
    strengths: ["Resilience", "Restraint", "Awareness of personal limits"],
    blindSpots: ["May remain with familiar choices too long", "May leave goals loosely defined"],
    growthSuggestions: ["Explore paycheck allocation", "Learn how time changes compound growth"],
  },
  SIFO: {
    code: "SIFO",
    name: "The Scout",
    family: personalityFamilies.SI,
    description: "Protects a secure base while using instinct to investigate new possibilities.",
    strengths: ["Curiosity with boundaries", "Adaptability"],
    blindSpots: [
      "May act on a promising impression before checking costs or rules",
    ],
    growthSuggestions: [
      "Practice account comparison",
      "Inspect risk and assumptions in projections",
    ],
  },
  EAPC: {
    code: "EAPC",
    name: "The Curator",
    family: personalityFamilies.EA,
    description: "Plans valued experiences carefully and selects opportunities with evidence.",
    strengths: ["Prioritization", "Research", "Intentional spending"],
    blindSpots: ["May rationalize preferred experiences", "May make plans too rigid"],
    growthSuggestions: [
      "Compare take-home and saving trade-offs",
      "Examine retirement-account constraints",
    ],
  },
  EAPO: {
    code: "EAPO",
    name: "The Producer",
    family: personalityFamilies.EA,
    description: "Turns ambitious possibilities into researched plans and concrete next steps.",
    strengths: ["Initiative", "Organization", "Informed exploration"],
    blindSpots: [
      "May take on too many goals",
      "May assume a detailed plan controls uncertainty",
    ],
    growthSuggestions: [
      "Test compound-growth scenarios",
      "Explore employer-match assumptions",
    ],
  },
  EAFC: {
    code: "EAFC",
    name: "The Editor",
    family: personalityFamilies.EA,
    description:
      "Revises choices as circumstances change while keeping attention on what matters most.",
    strengths: ["Discernment", "Flexibility", "Evidence-based adjustment"],
    blindSpots: [
      "May optimize after every new detail",
      "May struggle to settle on priorities",
    ],
    growthSuggestions: [
      "Practice paycheck allocation",
      "Compare account features side by side",
    ],
  },
  EAFO: {
    code: "EAFO",
    name: "The Experimenter",
    family: personalityFamilies.EA,
    description: "Learns by testing new options, observing results, and adjusting quickly.",
    strengths: ["Curiosity", "Analytical learning", "Adaptability"],
    blindSpots: [
      "May treat financial choices as low-cost experiments when consequences persist",
    ],
    growthSuggestions: [
      "Explore projection uncertainty",
      "Compare account rules before acting",
    ],
  },
  EIPC: {
    code: "EIPC",
    name: "The Grounded Dreamer",
    family: personalityFamilies.EI,
    description:
      "Makes plans for meaningful experiences while keeping exploration within chosen limits.",
    strengths: ["Purpose", "Imagination", "Follow-through"],
    blindSpots: [
      "May build a plan around optimistic assumptions",
      "May avoid less inspiring details",
    ],
    growthSuggestions: [
      "Work through paycheck deductions",
      "Compare retirement-account basics",
    ],
  },
  EIPO: {
    code: "EIPO",
    name: "The Trailblazer",
    family: personalityFamilies.EI,
    description:
      "Commits to an exciting direction and is willing to explore beyond familiar choices.",
    strengths: ["Vision", "Momentum", "Openness"],
    blindSpots: [
      "May move quickly past uncertainty",
      "May treat enthusiasm as evidence",
    ],
    growthSuggestions: [
      "Test long-term scenarios",
      "Examine employer-match and account rules",
    ],
  },
  EIFC: {
    code: "EIFC",
    name: "The Navigator",
    family: personalityFamilies.EI,
    description: "Adapts by feel, values present experience, and avoids unnecessary uncertainty.",
    strengths: ["Responsiveness", "Practical self-awareness"],
    blindSpots: [
      "May postpone long-term structure",
      "May default to the most comfortable option",
    ],
    growthSuggestions: [
      "Practice flexible paycheck trade-offs",
      "Build a foundation in account types",
    ],
  },
  EIFO: {
    code: "EIFO",
    name: "The Catalyst",
    family: personalityFamilies.EI,
    description: "Responds quickly to possibilities and brings energy to trying new approaches.",
    strengths: ["Initiative", "Creativity", "Comfort with change"],
    blindSpots: ["May underweight future costs, details, or consistency"],
    growthSuggestions: [
      "Explore compound-growth trade-offs",
      "Slow decisions through account comparison",
    ],
  },
};

export const personalityCodes = [
  "SAPC",
  "SAPO",
  "SAFC",
  "SAFO",
  "SIPC",
  "SIPO",
  "SIFC",
  "SIFO",
  "EAPC",
  "EAPO",
  "EAFC",
  "EAFO",
  "EIPC",
  "EIPO",
  "EIFC",
  "EIFO",
] as const satisfies readonly PersonalityCode[];

export function isPersonalityCode(value: string): value is PersonalityCode {
  return Object.hasOwn(personalityRecords, value);
}

export function getPersonalityRecord(code: PersonalityCode): PersonalityRecord {
  return personalityRecords[code];
}
