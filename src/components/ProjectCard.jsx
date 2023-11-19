import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ name, img, des, techs, urls }) => {
  return (
    <section>
      <motion.div
        className="hidden md:grid grid-cols-3 space-x-4 p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <article className="place-self-center col-span-2">
          <a href={urls[0]?.url} target="_blank">
            <img
              src={img}
              alt={name}
              className="object-cover w-[300px] lg:w-[500px] xl:w-full h-[200px] lg:h-[300px]"
            />
          </a>
        </article>
        <article className="flex flex-col items-end z-10 space-y-4">
          <p className="text-sm text-green">Featured Project</p>
          <a href={urls[0]?.url} target="_blank">
            <h2 className="text-3xl font-bold text-lightestSlate hover:text-green">
              {name}
            </h2>
          </a>
          <div className="w-[400px] hover:shadow-lg transition-all p-6 rounded bg-lightNavy text-light-slate">
            {des}
          </div>
          <div className="flex space-x-6">
            {techs.map((tech) => (
              <p className="text-sm " key={tech}>
                {tech}
              </p>
            ))}
          </div>

          <div className="flex space-x-6 text-2xl">
            {urls.map((item) => (
              <Link to={item.url} className="hover:text-green" key={item.url}>
                <item.icon />
              </Link>
            ))}
          </div>
        </article>
      </motion.div>

      <motion.a
        href={urls[0]?.url}
        className="md:hidden"
        target="_blank"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <img src={img} alt={name} className="object-cover h-[300px]" />
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-gray-950 px-9 py-12 opacity-90 hover:shadow-lg flex flex-col space-y-4 text-lightestSlate">
            <p className="text-sm text-green">Featured Project</p>
            <a href={urls[0]?.url}>
              <h2 className="text-3xl font-bold  hover:text-green">{name}</h2>
            </a>
            <div className="max-w-[80%]">{des}</div>
            <div className="flex space-x-6">
              {techs.map((tech) => (
                <p className="text-sm " key={tech}>
                  {tech}
                </p>
              ))}
            </div>

            <div className="flex space-x-6 text-2xl">
              {urls.map((item) => (
                <a
                  href={item.url}
                  className="hover:text-green"
                  key={item.url}
                  target="_blank"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    </section>
  );
};

export default ProjectCard;
