import { useOutletContext, useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import axios from "axios";

import CarouselDefault from "../components/carousel";
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
  { id: "17f2b30a5a8170b84ffd", name: "ccia" },
  { id: "03b82b64a0486cfc73ef", name: "covid" },
  { id: "f7f16736ed2e466ac866", name: "oldportfolio" },
  { id: "d947d483a0db0315e95e", name: "aurora" },
  { id: "c68e57f3f69538027cde", name: "mma" },
  // { id: "c68e57f3f69538027cde", name: "cashier" },
  { id: "c8035edb18b8fbe1a311", name: "pam" },
  // { id: "c68e57f3f69538027cde", name: "waranti" },
  { id: "3165f8a8f587976404d2", name: "projected-consulting" },
  { id: "84e3b4c1116dc7c7fca2", name: "projected-ai" },
  { id: "96d924772c558dc23069", name: "wabi-integration" },
  { id: "f0d9618ff8a942f86e46", name: "adenco-enterprise-system" },
  { id: "44af271b48446580149c", name: "wcc-system" },
  { id: "715c721f45d21a9ec2bf", name: "moeda" },
  { id: "560dcdf42ff03fab17d2", name: "empatrima" },
  { id: "a6688a7902cbd99980fc", name: "hompimpa" },
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

function highlight(title) {
  let result = "";
  const titleSpliced = title.split(" ");

  if (titleSpliced.length !== 1) {
    for (let index = 0; index < titleSpliced.length; index++) {
      if (index % 2 === 1) {
        result += `<span className="text-blue-600">${titleSpliced[index]}</span> `;
      } else {
        result += titleSpliced[index] + " ";
      }
    }
    return result;
  }

  return title;
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
    <div className={`min-h-screen flex flex-col ${isDarkMode}`}>
      <div className="flex-1 flex items-start justify-center px-6 lg:px-8 pt-32 relative z-10">
        <div className="mx-auto max-w-5xl sm:w-full">
          <div className="px-4 sm:px-0 bg-white p-14 rounded-lg shadow-md mobile-mode mb-12">
            <a href={result.link} target="_blank" rel="noreferrer">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-mobile -mt-2 mb-6 md:px-16 sm:px-0 capitalize">
                {HTMLReactParser(highlight(result.title))}
              </h2>
            </a>
            {isVideoPlayer ? <VideoPlayer src={result.media[0]} /> : <CarouselDefault media={result.media} />}
            <p className="text-md font-semibold leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 md:px-20 sm:px-0">
              Description:
            </p>
            <p className="text-sm leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 md:px-20 sm:px-0" key="desc12">
              {result.description.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < result.description.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="flex flex-wrap gap-2 my-3 md:px-16">
              {result.badge.map((item) => (
                <Badge key={item} text={item} />
              ))}
            </div>
            <p className="text-md mt-6 font-semibold leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 md:px-20 sm:px-0">
              Collaborator:
            </p>
            <p className="text-sm leading-6 text-gray-900 ms-0 md:-ms-4 lg:-ms-4 md:px-20 sm:px-0">
              Get in touch with us by clicking the badge.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 md:px-16">
              {result.collaborator.map((item) => (
                <BadgeCollaborator key={item.value} text={item.value} url={item.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {background}
    </div>
  );
}

export default ComingSoon;
