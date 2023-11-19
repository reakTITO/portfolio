import { motion } from "framer-motion";

const Contact = () => {
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
    },
  };

  return (
    <div className="mt-32" id="contact">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl text-lightestSlate font-bold">
          Get In Touch
        </h2>

        <p className="mt-4 text-slate text-lg">
          Looking for any new opportunities, my inbox is always open. Feel free
          to say hi, I'll try my best to get back to you!
        </p>

        <motion.button
          type="button"
          className="button mt-10 px-8 py-4"
          variants={buttonVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="mailto:vireakkvan@gmail.com">Say Hello</a>
        </motion.button>
      </div>
    </div>
  );
};
export default Contact;
