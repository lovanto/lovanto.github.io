import { useOutletContext } from "react-router";

import resume from "../rifky_lovanto-resume.pdf";
function Home() {
  const [isDarkMode, backgroundTop, backgroundBottom] = useOutletContext();
  return (
    <div className={`h-screen flex items-center justify-center ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8">
        {backgroundTop}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hi, I'm Lovanto</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am Software Engineer and Mobile Development enthusiast currently a fresh graduate with honors from
              Telkom University, Indonesia.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm 
                hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-blue-600"
              >
                View My Resume
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {backgroundBottom}
      </div>
    </div>
  );
}

export default Home;
