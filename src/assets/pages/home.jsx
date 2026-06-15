import { useOutletContext } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

const resume = "https://1drv.ms/b/c/5aeb4bae723d9d9b/IQB7HJ7K1fUGRZo3Ks0KQqXlAfKvGULNf88UCjZlQ2-b5hE?e=1c0MW8";
function Home() {
  const [isDarkMode, background] = useOutletContext();
  return (
    <div className={`h-screen flex items-center justify-center ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-slide-up"
              style={{ animationDelay: "0ms" }}
            >
              Hi, I'm <span className="text-blue-600">Lovanto</span>
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-gray-600 animate-fade-slide-up"
              style={{ animationDelay: "150ms" }}
            >
              I'm a backend-focused Software Engineer with 4+ years of experience building scalable APIs,
              microservices, and AI-powered platforms, currently working as Backend Developer at Altimeda Cipta
              Visitama and Founder at Hompimpa. Main Tech Stack: Golang, Node.js, NestJS, and Next.js.
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-x-6 animate-fade-slide-up"
              style={{ animationDelay: "300ms" }}
            >
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
        <SpeedInsights />
        {background}
      </div>
    </div>
  );
}

export default Home;
