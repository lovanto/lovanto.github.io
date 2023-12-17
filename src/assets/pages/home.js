import resume from "../rifky_lovanto-resume.pdf";

function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="fixed isolate px-6 lg:px-8">
        <div
          className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 
            rotate-[30deg] bg-gradient-to-tr from-[#FC8412] to-[#ffffff] opacity-30 sm:left-[calc(50%-30rem)] 
            sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hi, I'm Lovanto</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm fresh graduate with honors from Telkom University with a bachelor's degree in computer software
              engineering, where I also worked as a laboratory assistant at the informatics laboratory. In my most
              recent intern role, I contributed to creating a restful API using Node.js and Golang. My hobbies are
              playing games especially on the testing stage, and reading comics, and I am always eager to expand my
              knowledge and skills in the field.
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
        <div
          className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl 
          sm:top-[calc(90%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 
            bg-gradient-to-tr from-[#FFFFFF] to-[#209CF6] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
