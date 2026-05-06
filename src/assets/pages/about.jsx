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
    <div className={`flex items-center justify-center -mt-24 min-h-screen ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 md:py-32 lg:py-56">
          <div className="px-4 sm:px-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-mobile">
              <span className="text-blue-600">About</span> Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6">
              <div className="flex justify-center md:justify-start items-center">
                <img
                  className="h-full w-72 ring-0 object-cover"
                  src="https://i.ibb.co.com/QQKrp6s/1728640906974.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm leading-6 text-gray-900">
                  I am a passionate Software Engineer, DevOps Engineer, AI, and Cyber Security enthusiast currently
                  working at PT. Altimeda Cipta Visitama and Founder of Hompimpa. I specialize in building scalable
                  backend systems, RESTful APIs, and cloud-based applications using Golang, Node.js, NestJS, and
                  Next.js.
                  <br />
                  <br />I also have experience in DevOps practices such as CI/CD, Docker, server management, and cloud
                  deployment, along with developing AI-powered solutions integrated with OpenAI technologies and vector
                  search systems.
                </p>
                <div className="flex justify-start items-center gap-4 mt-6">
                  <SosMedIcon link="https://www.linkedin.com/in/lovanto" source={linkedin} name="linkedin" />
                  <SosMedIcon link="https://github.com/lovanto" source={github} name="github" />
                  <SosMedIcon link="mailto:rifkylovanto@gmail.com" source={gmail} name="gmail" />
                  <SosMedIcon
                    link="https://api.whatsapp.com/send?phone=6287823837566"
                    source={whatsapp}
                    name="whatsapp"
                  />
                </div>
              </div>
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
