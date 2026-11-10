import { HashRouter, Route, Routes } from "react-router-dom";

import { AppShell } from "../components/layout/AppShell";
import { AcademyScreen } from "../screens/AcademyScreen";
import { AssessmentScreen } from "../screens/AssessmentScreen";
import { FirstPaycheckScreen } from "../screens/FirstPaycheckScreen";
import { LandingScreen } from "../screens/LandingScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
import { RecommendationsScreen } from "../screens/RecommendationsScreen";
import { ReflectionScreen } from "../screens/ReflectionScreen";
import { ResultsScreen } from "../screens/ResultsScreen";
import { AssessmentProvider } from "./AssessmentContext";
import { routePaths } from "./routePaths";

export function AppRouter() {
  return (
    <HashRouter>
      <AssessmentProvider>
        <AppShell>
          <Routes>
            <Route path={routePaths.home} element={<LandingScreen />} />
            <Route path="/assessment/:questionNumber" element={<AssessmentScreen />} />
            <Route path={routePaths.results} element={<ResultsScreen />} />
            <Route path={routePaths.recommendations} element={<RecommendationsScreen />} />
            <Route path={routePaths.academy} element={<AcademyScreen />} />
            <Route path={routePaths.firstPaycheck} element={<FirstPaycheckScreen />} />
            <Route path={routePaths.reflection} element={<ReflectionScreen />} />
            <Route path={routePaths.notFound} element={<NotFoundScreen />} />
          </Routes>
        </AppShell>
      </AssessmentProvider>
    </HashRouter>
  );
}
