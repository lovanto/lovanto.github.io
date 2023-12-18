import { useOutletContext } from "react-router";
import OrangeShard from "../components/orange_shard";
import BlueShard from "../components/blue_shard";

import profile from "../images/file.enc";
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
  const [isDarkMode] = useOutletContext();

  return (
    <div className={`flex items-center justify-center -mt-24 ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8">
        <OrangeShard />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="px-4 sm:px-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
            <div className="columns-2">
              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-900">
                I'm fresh graduate with honors from Telkom University with a bachelor's degree in computer software
                engineering, where I also worked as a laboratory assistant at the informatics laboratory. In my most
                recent intern role, I contributed to creating a restful API using Node.js and Golang. My hobbies are
                playing games especially on the testing stage, and reading comics, and I am always eager to expand my
                knowledge and skills in the field.
              </p>
              <img className="inline-block ms-10 pb-4 h-72 w-72 ring-0" src={profile} alt="" />
            </div>
            <div className="flex justify-between -space-x-1 overflow-hidden -mt-12 w-48">
              <SosMedIcon link="/" source={linkedin} name="linkedin" />
              <SosMedIcon link="/" source={github} name="github" />
              <SosMedIcon link="/" source={gmail} name="gmail" />
              <SosMedIcon link="/" source={whatsapp} name="whatsapp" />
            </div>
          </div>

          <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work Experiences</h2>
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education Level</h2>
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Organizational Level</h2>
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
        <BlueShard />
      </div>
    </div>
  );
}

export default About;
