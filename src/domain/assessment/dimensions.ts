import type { DimensionDefinition, DimensionId } from "./types";

export const dimensionDefinitions: Readonly<Record<DimensionId, DimensionDefinition>> = {
  SE: {
    id: "SE",
    firstLetter: "S",
    firstLabel: "Security-focused",
    secondLetter: "E",
    secondLabel: "Experience-focused",
  },
  AI: {
    id: "AI",
    firstLetter: "A",
    firstLabel: "Analytical",
    secondLetter: "I",
    secondLabel: "Intuitive",
  },
  PF: {
    id: "PF",
    firstLetter: "P",
    firstLabel: "Planned",
    secondLetter: "F",
    secondLabel: "Flexible",
  },
  CO: {
    id: "CO",
    firstLetter: "C",
    firstLabel: "Cautious",
    secondLetter: "O",
    secondLabel: "Exploratory",
  },
};
