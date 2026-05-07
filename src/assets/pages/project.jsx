import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import project from "../data/project";

const ITEMS_PER_PAGE = 9;

function Project() {
  const [isDarkMode, background] = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredProjects = project.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className={`flex items-start justify-center min-h-screen ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl mt-6">
          <div className="flex items-center justify-between mb-6 w-full">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project</h2>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-56 rounded-md border-2 px-3.5 py-2 text-gray-800 shadow-sm placeholder:text-gray-400 text-sm ml-auto"
            />
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {paginatedProjects.length === 0 && (
              <div className="col-span-3 py-16 text-center text-gray-400 text-sm">
                No projects found for &ldquo;{search}&rdquo;
              </div>
            )}
            {paginatedProjects.map((items, index) => (
              <div
                key={items.name + index}
                className="group relative animate-fade-slide-up transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative shadow-lg h-48 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
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
          {filteredProjects.length > 0 && (
            <div className="mt-10 flex flex-col items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {filteredProjects.length === 0
                  ? ""
                  : `Showing ${startIndex + 1}–${Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} of ${filteredProjects.length} projects`}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                >
                  First
                </button>
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                >
                  Next
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                >
                  Last
                </button>
              </div>
            </div>
          )}
        </div>
        {background}
      </div>
    </div>
  );
}

export default Project;
