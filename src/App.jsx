import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Navigation from "./assets/components/navigation";

// Lazy load components
const Home = React.lazy(() => import("./assets/pages/home"));
const About = React.lazy(() => import("./assets/pages/about"));
const Project = React.lazy(() => import("./assets/pages/project"));
const Contact = React.lazy(() => import("./assets/pages/contact"));
const NotFound = React.lazy(() => import("./assets/pages/not_found"));
const ComingSoon = React.lazy(() => import("./assets/pages/coming_soon"));
const ProjectOverview = React.lazy(() => import("./assets/pages/project_overview"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="project"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Project />
              </Suspense>
            }
          />
          <Route
            path="project/:name"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectOverview />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="soon"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ComingSoon />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
