function FeedExperience({ data }) {
  return (
    <li role="article" className="relative pl-8">
      <div className="flex flex-col flex-1 gap-1">
        <div
          className="absolute z-10 inline-flex items-center justify-center w-12 h-12 text-white 
          rounded-full -left-6 -top-3 ring-2 ring-white"
        >
          <div className="bg-white rounded-full p-0.5 shadow-md feed-logo-bg">
            <img src={data[0].image} alt="company" className="max-w-full rounded-full" />
          </div>
        </div>
        <div className="ms-4 -mt-4">
          {/* Company Name - bold and larger */}
          <h4 className="text-lg font-bold text-gray-900">{data[0].company}</h4>
          {data.map((experience, index) => (
            <div key={index} className="mt-2">
              {/* Role/Status - bold for emphasis */}
              <div className="flex justify-between items-center">
                <p className="text-gray-900 text-md">
                  <span className="font-semibold text-md">{experience.status}</span>
                </p>
                <span className="block text-sm font-normal text-gray-700">{experience.date}</span>
              </div>

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
