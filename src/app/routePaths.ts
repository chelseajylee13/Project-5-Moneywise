export const routePaths = {
  home: "/",
  assessment: "/assessment/1",
  assessmentQuestion: (questionNumber: number) => `/assessment/${questionNumber}`,
  results: "/results",
  recommendations: "/recommendations",
  academy: "/academy",
  firstPaycheck: "/academy/first-paycheck",
  reflection: "/academy/first-paycheck/reflection",
  notFound: "*",
} as const;
