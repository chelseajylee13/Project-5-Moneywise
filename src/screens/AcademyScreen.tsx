import { LessonCard } from "../components/academy/LessonCard";
import { lessonCatalog } from "../content/academy/lessons";

export function AcademyScreen() {
  return (
    <section className="catalog-page" aria-labelledby="academy-title">
      <header className="section-heading">
        <p className="eyebrow">Moneywise Academy</p>
        <h1 id="academy-title">Practical concepts, one clear step at a time.</h1>
        <p className="lede">
          Browse freely. Recommendations suggest a starting point, but they never lock content.
        </p>
      </header>
      <div className="lesson-grid">
        {lessonCatalog.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />)}
      </div>
    </section>
  );
}
