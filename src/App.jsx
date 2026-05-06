import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./assets/pages/home.jsx";
import About from "./assets/pages/about.jsx";
import Project from "./assets/pages/project.jsx";
import Contact from "./assets/pages/contact.jsx";
import NotFound from "./assets/pages/not_found.jsx";
import Navigation from "./assets/components/navigation.jsx";
import ComingSoon from "./assets/pages/coming_soon.jsx";
import ProjectOverview from "./assets/pages/project_overview.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:name" element={<ProjectOverview />} />
          <Route path="contact" element={<Contact />} />
          <Route path="soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
