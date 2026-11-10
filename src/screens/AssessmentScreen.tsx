import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useAssessment } from "../app/AssessmentContext";
import { routePaths } from "../app/routePaths";
import { QuestionCard } from "../components/assessment/QuestionCard";
import { assessmentQuestions } from "../content/assessment/questions";
import type { ResponseValue } from "../domain/assessment";

export function AssessmentScreen() {
  const { questionNumber } = useParams();
  const navigate = useNavigate();
  const { answers, setAnswer } = useAssessment();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const index = Number(questionNumber) - 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setErrorMessage(null);
  }, [index]);

  if (!Number.isInteger(index) || index < 0 || index >= assessmentQuestions.length) {
    return <Navigate to={routePaths.assessment} replace />;
  }

  const question = assessmentQuestions[index];
  const selectedValue = answers[question.id];
  const isLast = index === assessmentQuestions.length - 1;

  function goNext() {
    if (selectedValue === undefined) {
      setErrorMessage("Choose a response before continuing.");
      return;
    }
    navigate(isLast ? routePaths.results : routePaths.assessmentQuestion(index + 2));
  }

  return (
    <section className="assessment-layout" aria-labelledby="assessment-heading">
      <div className="progress-region">
        <div className="progress-copy">
          <span>Question {index + 1} of {assessmentQuestions.length}</span>
          <span>{Math.round(((index + 1) / assessmentQuestions.length) * 100)}% complete</span>
        </div>
        <progress value={index + 1} max={assessmentQuestions.length}>
          {index + 1} of {assessmentQuestions.length}
        </progress>
      </div>
      <h1 className="sr-only" id="assessment-heading">Moneywise personality assessment</h1>
      <QuestionCard
        question={question}
        selectedValue={selectedValue}
        errorMessage={errorMessage}
        onChange={(value) => {
          setAnswer(question.id, value);
          setErrorMessage(null);
        }}
      />
      <div className="assessment-actions">
        <button
          className="button-secondary"
          type="button"
          disabled={index === 0}
          onClick={() => navigate(routePaths.assessmentQuestion(index))}
        >
          Back
        </button>
        <button className="button-primary" type="button" onClick={goNext}>
          {isLast ? "See my result" : "Next"}
        </button>
      </div>
    </section>
  );
}
