export type LessonId = "first-paycheck" | "retirement-accounts" | "compound-growth";

export interface LessonSummary {
  readonly id: LessonId;
  readonly title: string;
  readonly summary: string;
  readonly preview: string;
  readonly estimatedTime: string;
  readonly status: "available" | "upcoming";
}

export const lessonCatalog: readonly LessonSummary[] = [
  {
    id: "first-paycheck",
    title: "Your First Paycheck & Employer Match",
    summary: "See how gross pay, deductions, take-home pay, and a fictional 401(k) match connect.",
    preview: "Adjust a retirement contribution and watch the paycheck trade-offs update.",
    estimatedTime: "6 minutes",
    status: "available",
  },
  {
    id: "retirement-accounts",
    title: "Retirement Accounts Explained",
    summary: "Compare workplace plans, traditional and Roth choices, and IRAs without the jargon.",
    preview: "Learn what changes between account types and which questions to ask.",
    estimatedTime: "Coming in Phase 3",
    status: "upcoming",
  },
  {
    id: "compound-growth",
    title: "The Power of Compound Growth",
    summary: "Explore how time, contributions, and hypothetical returns can shape long-term growth.",
    preview: "Separate what you contribute from hypothetical investment growth.",
    estimatedTime: "Coming in Phase 3",
    status: "upcoming",
  },
];

export function getLesson(id: LessonId): LessonSummary {
  const lesson = lessonCatalog.find((item) => item.id === id);
  if (!lesson) {
    throw new Error(`Unknown lesson: ${id}`);
  }
  return lesson;
}
