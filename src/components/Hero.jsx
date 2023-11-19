import { motion } from "framer-motion";

const Hero = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      x: -200,
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 3 }}
      className="mt-14"
    >
      <p className="text-lg text-green">Hi, my name is</p>
      <div className="mt-6 space-y-3">
        <h1 className="text-lightestSlate text-4xl md:text-5xl lg:text-6xl font-bold">
          Vireak Vankhann
        </h1>
        <p className="max-w-[80%] text-slate text-4xl md:text-5xl lg:text-6xl font-bold">
          I build things for the web.
        </p>
      </div>

      <p className="mt-6 max-w-[500px] text-slate font-semibold">
        I'm a software developer, not fully yet though only frontend. Currently,
        focus on learning to become one eventually.
      </p>

      <motion.button
        type="button"
        className="mt-12 button px-6 py-4 font-semibold"
        variants={buttonVariants}
        whileHover="hover"
        initial="hidden"
        animate="visible"
      >
        <a href="#projects">Check out my work!</a>
      </motion.button>
    </motion.div>
  );
};
export default Hero;
