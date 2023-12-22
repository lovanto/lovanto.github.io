import { useOutletContext, useParams } from "react-router-dom";
import CarouselDefault from "../components/carousel";
import axios from "axios";

import Badge from "../components/badge";
import BadgeCollaborator from "../components/badge-collaborator";
import VideoPlayer from "../components/video-player";
import React from "react";

let id;
const listOfId = [
  { id: "b6d7ce55cf392e845906", name: "portfolio" },
  { id: "f4713235a861d0ce8d9c", name: "telyukost" },
  { id: "7bd993f87e5073c92c4c", name: "iflabbap" },
  { id: "a9a241577d1ece44bb45", name: "iflabtv" },
  { id: "03b82b64a0486cfc73ef", name: "covid" },
  { id: "f7f16736ed2e466ac866", name: "oldportfolio" },
  { id: "d947d483a0db0315e95e", name: "aurora" },
  { id: "c68e57f3f69538027cde", name: "mma" },
  // { id: "c68e57f3f69538027cde", name: "cashier" },
  { id: "c8035edb18b8fbe1a311", name: "pam" },
  // { id: "c68e57f3f69538027cde", name: "waranti" },
];

function getId(param) {
  let isFound = false;

  listOfId.forEach((element) => {
    if (element.name === param) {
      id = element.id;
      isFound = true;
    }
  });

  if (isFound === false) {
    window.location.href = "/soon";
  }
}

function ComingSoon() {
  const [isDarkMode, background] = useOutletContext();
  const [result, setPost] = React.useState(null);

  const params = useParams();
  const isVideoPlayer = params.name === "iflabtv";

  getId(params.name);
  React.useEffect(() => {
    axios.get(`https://api.npoint.io/${id}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!result) return null;

  return (
    <div className={`flex items-center justify-center -mt-24 ${isDarkMode}`}>
      <div className="isolate px-6 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56 -mt-6 sm:w-full">
          <div className="px-4 sm:px-0 bg-white p-14 rounded-lg shadow-md mobile-mode">
            <a href={result.link} target="_blank" rel="noreferrer">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-mobile -mt-2 mb-6 md:px-16 sm:px-0 capitalize">
                {result.title}
              </h2>
            </a>
            {isVideoPlayer ? (
              <VideoPlayer src={result.media[0]} />
            ) : (
              <CarouselDefault image1={result.media[0]} image2={result.media[1]} />
            )}
            <p className="text-md font-semibold leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 px-20">Description:</p>
            <p className="text-sm leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 px-20">{result.description}</p>
            <div className="flex flex-wrap gap-2 my-3 px-16">
              {result.badge.map((item) => (
                <Badge text={item} />
              ))}
            </div>
            <p className="text-md mt-6 font-semibold leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 px-20">
              Collaborator:
            </p>
            <p className="text-sm leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 px-20">
              Get in touch with us by clicking the badge.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 px-16">
              {result.collaborator.map((item) => (
                <BadgeCollaborator text={item.value} url={item.url} />
              ))}
            </div>
          </div>
        </div>
        {background}
      </div>
    </div>
  );
}

export default ComingSoon;
