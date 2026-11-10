import type { AssessmentQuestion, ResponseOption } from "../../domain/assessment/types";

export const standardResponseOptions = [
  { label: "Strongly disagree", value: -2 },
  { label: "Somewhat disagree", value: -1 },
  { label: "Not sure yet", value: 0 },
  { label: "Somewhat agree", value: 1 },
  { label: "Strongly agree", value: 2 },
] as const satisfies readonly ResponseOption[];

const notSureScenarioOption = {
  label: "Not sure yet — none of these feels more natural.",
  value: 0,
} as const satisfies ResponseOption;

const se3Options = [
  { label: "Rebuild my cushion and skip the weekend extra.", value: -2 },
  { label: "Choose the lowest-cost way to join and keep most of the remaining money set aside.", value: -1 },
  { label: "Keep some money as a cushion and join the main activity.", value: 1 },
  { label: "Use the remaining extra money for the full shared experience and rebuild my cushion later.", value: 2 },
  notSureScenarioOption,
] as const satisfies readonly ResponseOption[];

const se4Options = [
  { label: "Keep the extra money unspent so I come home with the largest possible cushion.", value: -2 },
  { label: "Save most of it and choose one inexpensive extra if something feels worth it.", value: -1 },
  { label: "Keep some as a cushion and use the rest for one memorable activity with friends.", value: 1 },
  { label: "Use most of it for a memorable shared experience while we're there.", value: 2 },
] as const satisfies readonly ResponseOption[];

const ai3Options = [
  { label: "Make a detailed comparison and choose based on the numbers and features.", value: -2 },
  { label: "Compare the most important details and let that evidence guide me.", value: -1 },
  { label: "Check the basics, then choose the one that feels like the better fit.", value: 1 },
  { label: "Picture living with each option and trust my immediate sense of which fits me.", value: 2 },
  notSureScenarioOption,
] as const satisfies readonly ResponseOption[];

const ai4Options = [
  { label: "Keep analyzing until I can clearly justify the choice.", value: -2 },
  { label: "Compare a few decisive facts, then choose.", value: -1 },
  { label: "Consider the main facts, then follow what feels right.", value: 1 },
  { label: "Trust my initial sense of the choice, even if I cannot fully explain it.", value: 2 },
] as const satisfies readonly ResponseOption[];

const pf3Options = [
  { label: "Keep my original spending limit and suggest a plan that fits it.", value: -2 },
  { label: "Adjust only a little while keeping most of my original plan.", value: -1 },
  { label: "Revise my plan to fit the new option while keeping an eye on the total.", value: 1 },
  { label: "Decide in the moment and reorganize my other spending afterward.", value: 2 },
  notSureScenarioOption,
] as const satisfies readonly ResponseOption[];

const pf4Options = [
  { label: "Assign all of it to specific purposes before using any.", value: -2 },
  { label: "Plan how to use most of it and leave a small amount open.", value: -1 },
  { label: "Choose one current use and leave the rest flexible.", value: 1 },
  { label: "Keep it unassigned and decide as needs or opportunities come up.", value: 2 },
] as const satisfies readonly ResponseOption[];

const co3Options = [
  { label: "Stay with familiar options and not explore it for now.", value: -2 },
  { label: "Save its name and revisit it only if it becomes relevant.", value: -1 },
  { label: "Read a short overview to see how it differs from familiar options.", value: 1 },
  { label: "Explore how it works and what new possibilities it could offer.", value: 2 },
  notSureScenarioOption,
] as const satisfies readonly ResponseOption[];

const co4Options = [
  { label: "Keep using the familiar method.", value: -2 },
  { label: "Learn about the new method but wait until I have a reason to change.", value: -1 },
  { label: "Try the new method with one small part of my routine.", value: 1 },
  { label: "Give the new method a full short-term trial and learn by using it.", value: 2 },
] as const satisfies readonly ResponseOption[];

// The order interleaves dimensions while alternating agreement and scenario rounds.
export const assessmentQuestions = [
  {
    id: "SE1",
    text: "Having money set aside usually feels more reassuring to me than spending it on something enjoyable right away.",
    format: "agreement",
    scoringMode: "agreement",
    dimension: "SE",
    directionalKey: "S",
    reverse: true,
    anchor: false,
    responseOptions: standardResponseOptions,
  },
  {
    id: "AI1",
    text: "Before making a money decision, I prefer comparing the numbers and available options.",
    format: "agreement",
    scoringMode: "agreement",
    dimension: "AI",
    directionalKey: "A",
    reverse: true,
    anchor: false,
    responseOptions: standardResponseOptions,
  },
  {
    id: "PF1",
    text: "I like deciding in advance how I would use my money.",
    format: "agreement",
    scoringMode: "agreement",
    dimension: "PF",
    directionalKey: "P",
    reverse: true,
    anchor: false,
    responseOptions: standardResponseOptions,
  },
  {
    id: "CO1",
    text: "When learning about money, I prefer starting with familiar options before considering unfamiliar ones.",
    format: "agreement",
    scoringMode: "agreement",
    dimension: "CO",
    directionalKey: "C",
    reverse: true,
    anchor: false,
    responseOptions: standardResponseOptions,
  },
  {
    id: "SE2",
    text: "A meaningful experience can be worth saving a little less for a while.",
    format: "agreement",
    scoringMode: "agreement",
    dimension: "SE",
    directionalKey: "E",
    reverse: false,
    anchor: false,
    responseOptions: standardResponseOptions,
  },
  {
    id: "AI2",
    text: "I can feel comfortable with a money choice before I can explain all the numbers behind it.",
    format: "agreement",
    scoringMode: "agreement",
    dimension: "AI",
    directionalKey: "I",
    reverse: false,
    anchor: false,
    responseOptions: standardResponseOptions,
  },
  {
    id: "PF2",
    text: "I prefer leaving room to change a spending or saving plan when circumstances change.",
    format: "agreement",
    scoringMode: "agreement",
    dimension: "PF",
    directionalKey: "F",
    reverse: false,
    anchor: false,
    responseOptions: standardResponseOptions,
  },
  {
    id: "CO2",
    text: "I enjoy learning how an unfamiliar financial tool or account works.",
    format: "agreement",
    scoringMode: "agreement",
    dimension: "CO",
    directionalKey: "O",
    reverse: false,
    anchor: false,
    responseOptions: standardResponseOptions,
  },
  {
    id: "SE3",
    text: "An unexpected expense uses part of the money you had set aside for a weekend with friends. You can still afford to do something, but your cushion would be smaller. What feels most natural?",
    format: "scenario",
    scoringMode: "direct",
    dimension: "SE",
    directionalKey: "E",
    reverse: false,
    anchor: false,
    responseOptions: se3Options,
  },
  {
    id: "AI3",
    text: "You're choosing between two phone plans. Both cover what you need, but their prices and features differ. How would you decide?",
    format: "scenario",
    scoringMode: "direct",
    dimension: "AI",
    directionalKey: "I",
    reverse: false,
    anchor: false,
    responseOptions: ai3Options,
  },
  {
    id: "PF3",
    text: "Friends change the weekend plans at the last minute, and the new option costs a different amount. How would you respond?",
    format: "scenario",
    scoringMode: "direct",
    dimension: "PF",
    directionalKey: "F",
    reverse: false,
    anchor: false,
    responseOptions: pf3Options,
  },
  {
    id: "CO3",
    text: "You hear about a financial account or tool you have not used before. What would you be most likely to do?",
    format: "scenario",
    scoringMode: "direct",
    dimension: "CO",
    directionalKey: "O",
    reverse: false,
    anchor: false,
    responseOptions: co3Options,
  },
  {
    id: "SE4",
    text: "You're on a trip with friends. The essentials are covered, and you have some extra money available. What feels most natural?",
    format: "scenario",
    scoringMode: "direct",
    dimension: "SE",
    directionalKey: "E",
    reverse: false,
    anchor: true,
    responseOptions: se4Options,
  },
  {
    id: "AI4",
    text: "You want to buy something you've considered for a while, but the reviews and trade-offs are mixed. What feels most natural?",
    format: "scenario",
    scoringMode: "direct",
    dimension: "AI",
    directionalKey: "I",
    reverse: false,
    anchor: true,
    responseOptions: ai4Options,
  },
  {
    id: "PF4",
    text: "You receive some unexpected money with no immediate obligation attached. How would you handle it?",
    format: "scenario",
    scoringMode: "direct",
    dimension: "PF",
    directionalKey: "F",
    reverse: false,
    anchor: true,
    responseOptions: pf4Options,
  },
  {
    id: "CO4",
    text: "A friend shows you a new way to organize money. Your current method works well enough. What feels most natural?",
    format: "scenario",
    scoringMode: "direct",
    dimension: "CO",
    directionalKey: "O",
    reverse: false,
    anchor: true,
    responseOptions: co4Options,
  },
] as const satisfies readonly AssessmentQuestion[];
