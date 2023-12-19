import { useOutletContext } from "react-router-dom";

import project from "../data/project";

// const itemss = [
//   {
//     name: "Desk and Office",
//     description: "Work from home accessories",
//     imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
//     imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
//     href: "#",
//   },
//   {
//     name: "Self-Improvement",
//     description: "Journals and note-taking",
//     imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
//     imageAlt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
//     href: "#",
//   },
//   {
//     name: "Travel",
//     description: "Daily commute essentials",
//     imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
//     imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
//     href: "#",
//   },
// ];

function Project() {
  const [isDarkMode, backgroundTop, backgroundBottom] = useOutletContext();
  return (
    <div className={`items-center justify-center ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8">
        {backgroundTop}
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
                    <span className="absolute inset-0" />
                    {items.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mb-6">{items.description}</p>
              </div>
            ))}
          </div>
        </div>
        {backgroundBottom}
      </div>
    </div>
  );
}

export default Project;
