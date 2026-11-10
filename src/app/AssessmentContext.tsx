import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import { assessmentQuestions } from "../content/assessment/questions";
import {
  scoreAssessment,
  type AssessmentResult,
  type QuestionId,
  type ResponseValue,
} from "../domain/assessment";

type AnswerState = Partial<Record<QuestionId, ResponseValue>>;

interface AssessmentContextValue {
  readonly answers: AnswerState;
  readonly result: AssessmentResult | null;
  readonly answeredCount: number;
  readonly setAnswer: (questionId: QuestionId, value: ResponseValue) => void;
  readonly resetAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function AssessmentProvider({ children }: PropsWithChildren) {
  const [answers, setAnswers] = useState<AnswerState>({});

  const result = useMemo(() => {
    if (Object.keys(answers).length !== assessmentQuestions.length) {
      return null;
    }

    return scoreAssessment(answers);
  }, [answers]);

  const value = useMemo<AssessmentContextValue>(
    () => ({
      answers,
      result,
      answeredCount: Object.keys(answers).length,
      setAnswer: (questionId, response) => {
        setAnswers((current) => ({ ...current, [questionId]: response }));
      },
      resetAssessment: () => setAnswers({}),
    }),
    [answers, result],
  );

  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>;
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error("useAssessment must be used within AssessmentProvider.");
  }
  return context;
}
