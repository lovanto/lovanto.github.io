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
                  I am a backend-focused Software Engineer with 4+ years of professional experience, currently working
                  at PT. Altimeda Cipta Visitama and Founder of Hompimpa. I specialize in building scalable backend
                  systems, RESTful APIs, microservices, and AI-powered platforms using Golang, Node.js, NestJS, and
                  Next.js, delivering production systems for enterprise clients across Indonesia, Australia, and Japan.
                  <br />
                  <br />I also have hands-on experience with cloud infrastructure (Azure, GCP, AWS), CI/CD pipelines, and
                  DevOps practices such as Docker and Linux server administration, along with AI integrations using
                  OpenAI, Claude, and Gemini APIs and vector search systems.
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
        </div>
        {background}
      </div>
    </div>
  );
}

export default About;
