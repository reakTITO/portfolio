import { technologies } from "../constants/constants";
import { MdOutlineArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div className="mt-36 md:mt-32" id="about">
      <h3 className="text-xl sm:text-2xl font-bold text-lightestSlate">
        About Me
      </h3>

      <p className="mt-8 text-lg max-w-[500px] text-slate">
        Hello! My name is Vireak and I enjoy creating things that relate with
        technology. My interest in web development started back in 2021 when i
        got into university and It's was so fascinating.
      </p>
      <p className="mt-6 text-lg text-slate">
        Technologies that I've been working with recently:
      </p>
      <div className="mt-6 grid grid-cols-2 space-y-2">
        {technologies.map((technology) => (
          <p className="flex items-center text-slate" key={technology}>
            <span className="text-lg text-green mr-2">
              <MdOutlineArrowRight />{" "}
            </span>
            {technology}
          </p>
        ))}
      </div>
    </div>
  );
};
export default About;
