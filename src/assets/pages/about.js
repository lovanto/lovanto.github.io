import { useOutletContext } from "react-router-dom";

import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import gmail from "../images/email.svg";
import whatsapp from "../images/whatsapp.svg";
import SosMedIcon from "../components/sosmed_icon";
import FeedExperience from "../components/feed_experience";
import FeedExperienceNoImage from "../components/feed_experience_no_image";

import experienceData from "../data/work_experience";
import educationData from "../data/educational_experience";
import organizationalData from "../data/organizational_experience";

// Group experiences by company
function groupByCompany(data) {
  return data.reduce((acc, current) => {
    const { company } = current;
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(current);
    return acc;
  }, {});
}

function About() {
  const [isDarkMode, background] = useOutletContext();
  const groupedExperienceData = groupByCompany(experienceData);

  return (
    <div className={`flex items-center justify-center -mt-24 ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 md:py-32 lg:py-56">
          <div className="px-4 sm:px-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-mobile">
              <span className="text-blue-600">About</span> Me
            </h2>
            <div className="sm:columns-2 pt-6">
              <img
                className="inline-block pb-4 h-72 w-72 ring-0"
                src="https://i.ibb.co.com/QQKrp6s/1728640906974.jpg"
                alt=""
              />
              <p className="max-w-2xl text-sm leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4">
                I have a bachelor's degree in software engineering from Telkom University, where I also worked as a
                laboratory assistant. As a backend developer, I've gained valuable experience contributing to RESTful
                APIs using Node.js, Golang, and AI/ML technologies at companies like PT. Altimeda Cipta Visitama and PT.
                Telkom Indonesia. Additionally, I've been actively involved in various organizations including Proclub,
                the Informatics Laboratory, and BITCOM.
              </p>
            </div>
            <div className="flex justify-between items-end overflow-hidden mt-2 md:-mt-14 lg:-mt-14 w-48 md:ms-80 lg:ms-80">
              <SosMedIcon link="https://www.linkedin.com/in/lovanto" source={linkedin} name="linkedin" />
              <SosMedIcon link="https://github.com/lovanto" source={github} name="github" />
              <SosMedIcon link="mailto:rifkylovanto@gmail.com" source={gmail} name="gmail" />
              <SosMedIcon link="https://api.whatsapp.com/send?phone=6287823837566" source={whatsapp} name="whatsapp" />
            </div>
          </div>

          <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Work <span className="text-blue-600">Experiences</span>
          </h2>
          <ul
            aria-label="User feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-8 after:border-dashed 
            after:absolute after:top-6 after:bottom-6 after:border after:border-gray-500"
          >
            {Object.entries(groupedExperienceData).map(([company, experiences]) => (
              <FeedExperience data={experiences} key={company} />
            ))}
          </ul>

          <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="text-blue-600">Educational</span> Level
          </h2>
          <ul
            aria-label="User feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-8 after:border-dashed 
            after:absolute after:top-6 after:bottom-6 after:border after:border-gray-500"
          >
            {educationData.map((item, index) => (
              <FeedExperienceNoImage data={item} key={item.company + index} />
            ))}
          </ul>

          <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Organizational <span className="text-blue-600">Experiences</span>
          </h2>
          <ul
            aria-label="User feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-8 after:border-dashed 
            after:absolute after:top-6 after:bottom-6 after:border after:border-gray-500"
          >
            {organizationalData.map((item, index) => (
              <FeedExperienceNoImage data={item} key={item.company + index} />
            ))}
          </ul>
        </div>
        {background}
      </div>
    </div>
  );
}

export default About;
