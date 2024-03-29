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

function About() {
  const [isDarkMode, background] = useOutletContext();

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
                src="https://media.licdn.com/dms/image/D5603AQG90I12oUhE_g/profile-displayphoto-shrink_400_400/0/1706497510889?e=1714003200&v=beta&t=AsJsqWvDoL8lVZ5Lez28okXaOTMn-DGWC6Zt4P-JT-E"
                alt=""
              />
              <p className="max-w-2xl text-sm leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4">
                I'm fresh graduate with honors from Telkom University with a bachelor's degree in computer software
                engineering, where I also worked as a laboratory assistant at the informatics laboratory. In my most
                recent intern role, I contributed to creating a restful API using Node.js and Golang. My hobbies are
                playing games especially on the testing stage, and reading comics, and I am always eager to expand my
                knowledge and skills in the field.
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
            {experienceData.map((item, index) => (
              <FeedExperience data={item} key={item.company + index} />
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
