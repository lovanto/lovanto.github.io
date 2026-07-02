import { useOutletContext } from "react-router-dom";
import ScrollReveal from "../components/scroll_reveal";

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
import skillsData from "../data/skills";
import achievementsData from "../data/achievements";

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
          <ScrollReveal delay={0} className="px-4 sm:px-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-mobile">
              <span className="text-blue-600">About</span> Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6">
              <ScrollReveal delay={100} className="flex justify-center md:justify-start items-center">
                <img
                  className="h-full w-72 ring-0 object-cover rounded-2xl"
                  src="https://i.ibb.co.com/QQKrp6s/1728640906974.jpg"
                  alt=""
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm leading-6 text-gray-900">
                  Backend-focused software engineer with experience building scalable APIs, microservices, and
                  AI-powered platforms using Node.js, Golang, and NestJS. Delivered production systems across
                  Indonesia, Australia, Singapore, and Japan, with cloud platforms (Azure, GCP, AWS), Linux Server,
                  CI/CD, and AI integrations (OpenAI, Claude, Gemini, Local LLM).
                </p>
                <div className="flex justify-start items-center gap-4 mt-6">
                  <SosMedIcon link="https://www.linkedin.com/in/lovanto" source={linkedin} name="linkedin" />
                  <SosMedIcon link="https://github.com/lovanto" source={github} name="github" />
                  <SosMedIcon link="mailto:rifkylovanto@gmail.com" source={gmail} name="gmail" />
                  <SosMedIcon
                    link="https://api.whatsapp.com/send?phone=6282123304428"
                    source={whatsapp}
                    name="whatsapp"
                  />
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0}>
            <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          </ScrollReveal>
          <ScrollReveal delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Work <span className="text-blue-600">Experiences</span>
            </h2>
          </ScrollReveal>
          <ul
            aria-label="User feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-8 after:border-dashed 
            after:absolute after:top-6 after:bottom-6 after:border after:border-gray-500 after:-z-10"
          >
            {Object.entries(groupedExperienceData).map(([company, experiences], index) => (
              <ScrollReveal key={company} delay={index * 80}>
                <FeedExperience data={experiences} />
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal delay={0}>
            <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          </ScrollReveal>
          <ScrollReveal delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-blue-600">Educational</span> Level
            </h2>
          </ScrollReveal>
          <ul
            aria-label="User feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-8 after:border-dashed 
            after:absolute after:top-6 after:bottom-6 after:border after:border-gray-500 after:-z-10"
          >
            {educationData.map((item, index) => (
              <ScrollReveal key={item.company + index} delay={index * 80}>
                <FeedExperienceNoImage data={item} />
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal delay={0}>
            <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          </ScrollReveal>
          <ScrollReveal delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Organizational <span className="text-blue-600">Experiences</span>
            </h2>
          </ScrollReveal>
          <ul
            aria-label="User feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-8 after:border-dashed 
            after:absolute after:top-6 after:bottom-6 after:border after:border-gray-500 after:-z-10"
          >
            {organizationalData.map((item, index) => (
              <ScrollReveal key={item.company + index} delay={index * 80}>
                <FeedExperienceNoImage data={item} />
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal delay={0}>
            <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          </ScrollReveal>
          <ScrollReveal delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies & <span className="text-blue-600">Skills</span>
            </h2>
          </ScrollReveal>
          <div className="py-8 space-y-6">
            {skillsData.map((skill, index) => (
              <ScrollReveal key={skill.category} delay={index * 80}>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0}>
            <hr className="h-px my-8 bg-gray-500 border-0"></hr>
          </ScrollReveal>
          <ScrollReveal delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-blue-600">Achieve</span>ments
            </h2>
          </ScrollReveal>
          <div className="py-8 space-y-4">
            {achievementsData.map((achievement, index) => (
              <ScrollReveal key={achievement.title} delay={index * 80}>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        {background}
      </div>
    </div>
  );
}

export default About;
