import { motion } from "framer-motion";

import { socials } from "../constants/constants";
const Sidebar = () => {
  const iconsVariants = {
    hover: {
      y: -3,
      transition: { duration: 0.25, type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed left-8 lg:left-12 bottom-[40%]"
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.75 }}
      >
        <ul className="flex flex-col space-y-8">
          {socials.map((social) => (
            <motion.li
              key={social.name}
              className="last::mt-8"
              variants={iconsVariants}
              whileHover="hover"
            >
              <a
                href={social.url}
                className="text-xl hover:text-green"
                target="_blank"
              >
                <social.icon />
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div>
        <motion.a
          href="mailto:vireakkvan@gmail.com"
          className="fixed -right-10 lg:-right-8 bottom-[45.4%] transform rotate-90"
          whileHover={{ color: "#64ffda" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.75 } }}
          transition={{ duration: 0.25 }}
        >
          vireakkvan@gmail.com
        </motion.a>
      </div>
    </div>
  );
};
export default Sidebar;
