const ProjectCard = ({ name, img, des }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={img}
            alt={name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>
          <a
            href=""
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            h9
          </a>
          <p className="mt-2 text-gray-500">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
