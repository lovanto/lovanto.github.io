import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./assets/pages/home";
import About from "./assets/pages/about";
import Project from "./assets/pages/project";
import Hobby from "./assets/pages/hobby";
import Contact from "./assets/pages/contact";
import NotFound from "./assets/pages/not_found";
import Navigation from "./assets/components/navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="hobby" element={<Hobby />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
