function FeedExperience2({ data }) {
  return (
    <li role="article" className="relative pl-8">
      <div className="flex flex-col flex-1 gap-1">
        <div
          href="/"
          className="absolute z-10 inline-flex items-center justify-center w-4 h-4 text-white 
          rounded-full -left-2 -top-3 ring-2 ring-white bg-gray-900  shadow-md"
        ></div>
        <div className="ms-4 -mt-4">
          <h4
            className="flex flex-col items-start text-lg font-medium text-gray-900 
            md:flex-row lg:items-center"
          >
            <span className="flex-1 text-base">{data.company}</span>
            <span className="text-sm font-normal text-gray-600">{data.date}</span>
          </h4>
          <p className=" text-gray-900 text-sm">
            <span className="font-normal text-gray-600">{data.status}</span>
          </p>
          <p className=" text-gray-900 text-sm">
            <span>{data.description}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default FeedExperience2;
