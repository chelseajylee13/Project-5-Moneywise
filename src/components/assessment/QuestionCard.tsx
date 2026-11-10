import type { AssessmentQuestion, ResponseValue } from "../../domain/assessment";

interface QuestionCardProps {
  readonly question: AssessmentQuestion;
  readonly selectedValue: ResponseValue | undefined;
  readonly errorMessage: string | null;
  readonly onChange: (value: ResponseValue) => void;
}

export function QuestionCard({
  question,
  selectedValue,
  errorMessage,
  onChange,
}: QuestionCardProps) {
  return (
    <fieldset className="question-card" aria-describedby={errorMessage ? "question-error" : undefined}>
      <legend>
        <span className="question-kind">
          {question.format === "scenario" ? "Imagine this" : "What feels like you?"}
        </span>
        {question.text}
      </legend>
      <div className="response-list">
        {question.responseOptions.map((option) => {
          const optionId = `${question.id}-${option.value}`;
          return (
            <label
              className={selectedValue === option.value ? "response-option is-selected" : "response-option"}
              key={option.value}
            >
              <input
                id={optionId}
                type="radio"
                name={question.id}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => onChange(option.value)}
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
      {errorMessage ? (
        <p className="form-error" id="question-error" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </fieldset>
  );
}
