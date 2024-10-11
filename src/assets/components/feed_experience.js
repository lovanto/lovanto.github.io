function FeedExperience({ data }) {
  return (
    <li role="article" className="relative pl-8">
      <div className="flex flex-col flex-1 gap-1">
        <div
          className="absolute z-10 inline-flex items-center justify-center w-12 h-12 text-white 
          rounded-full -left-6 -top-3 ring-2 ring-white"
        >
          <div className="bg-white rounded-full p-0.5 shadow-md">
            <img src={data[0].image} alt="company" className="max-w-full rounded-full" />
          </div>
        </div>
        <div className="ms-4 -mt-4">
          {/* Company Name - bold and larger */}
          <h4 className="flex flex-col items-start text-lg font-bold text-gray-900 md:flex-row lg:items-center">
            <span className="flex-1">{data[0].company}</span>
          </h4>
          {data.map((experience, index) => (
            <div key={index} className="mt-2">
              {/* Date - smaller font, muted color */}
              <span className="block text-sm font-normal text-gray-700">{experience.date}</span>

              {/* Role/Status - bold for emphasis */}
              <p className="text-gray-900 text-md">
                <span className="font-semibold text-md">{experience.status}</span>
              </p>

              {/* Description */}
              <p className="text-gray-900 text-sm">
                <span>{experience.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default FeedExperience;
