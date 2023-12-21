import { useOutletContext, useParams } from "react-router-dom";
import CarouselDefault from "../components/carousel";

import Badge from "../components/badge";
import BadgeCollaborator from "../components/badge-collaborator";
import VideoPlayer from "../components/video-player";

function ComingSoon() {
  const [isDarkMode, background] = useOutletContext();
  const params = useParams();
  const isVideoPlayer = params.name === "iflabtv";

  return (
    <div className={`flex items-center justify-center -mt-24 ${isDarkMode}`}>
      <div className="isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56 -mt-6">
          <div className="px-4 sm:px-0 bg-white p-14 rounded-lg shadow-sm">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 mt-mobile -mt-2 mb-6 px-16 capitalize">
              {params.name}
            </h2>
            {isVideoPlayer ? (
              <VideoPlayer src="https://docs.material-tailwind.com/demo.mp4" />
            ) : (
              <CarouselDefault
                image1="https://raw.githubusercontent.com/lovanto/lovanto.github.io/master/src/assets/project/telyukost1.png"
                image2="https://raw.githubusercontent.com/lovanto/lovanto.github.io/master/src/assets/project/telyukost2.png"
              />
            )}
            <p className="text-md font-semibold leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 px-20">Description:</p>
            <p className="text-sm leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 px-20">
              I'm fresh graduate with honors from Telkom University with a bachelor's degree in computer software
              engineering, where I also worked as a laboratory assistant at the informatics laboratory. In my most
              recent intern role, I contributed to creating a restful API using Node.js and Golang. My hobbies are
              playing games especially on the testing stage, and reading comics, and I am always eager to expand my
              knowledge and skills in the field.
            </p>
            <div className="my-3 px-16">
              <Badge text="Default" />
              <Badge text="Default" />
              <Badge text="Default" />
              <Badge text="Default" />
              <Badge text="Default" />
            </div>
            <p className="text-md mt-6 font-semibold leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 px-20">
              Collaborator:
            </p>
            <div className="mt-3 px-16">
              <BadgeCollaborator text="Default" />
              <BadgeCollaborator text="Default" />
              <BadgeCollaborator text="Default" />
              <BadgeCollaborator text="Default" />
              <BadgeCollaborator text="Default" />
            </div>
          </div>
        </div>
        {background}
      </div>
    </div>
  );
}

export default ComingSoon;
