import { useOutletContext } from "react-router-dom";

import project from "../data/project";

function Project() {
  const [isDarkMode, background] = useOutletContext();
  return (
    <div className={`items-center justify-center ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl mt-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Project</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {project.map((items, index) => (
              <div key={items.name + index} className="group relative">
                <div className="relative shadow-lg h-80 w-full -mb-3 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src={items.imageSrc} alt={items.imageAlt} className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                  <a href={items.href}>
                    <span className="absolute inset-0 capitalize" />
                    {items.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mb-6 capitalize">{items.description}</p>
              </div>
            ))}
          </div>
        </div>
        {background}
      </div>
    </div>
  );
}

export default Project;
