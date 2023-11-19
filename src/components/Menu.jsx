import { useGlobalContext } from "../useGlobalContext";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const Menu = () => {
  const { showMenu, setShowMenu } = useGlobalContext();

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.25,
      },
    },
  };
  return (
    <AnimatePresence>
      {showMenu && (
        <div
          className="fixed top-0 w-screen h-screen flex justify-end z-50"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="bg-lightNavy w-[70%] h-full p-24">
            <motion.button
              type="button"
              className="absolute top-6 right-8 text-3xl text-green"
              animate={{ rotate: 180 }}
              whileTap={{ rotate: 90 }}
              transition={{ duration: 0.25 }}
              onClick={() => setShowMenu(!showMenu)}
            >
              <RxCross1 />
            </motion.button>
            <div className="flex md:hidden flex-col space-y-8 items-center text-lg">
              <ul className="flex flex-col space-y-6">
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  exit={{ y: -200, transition: { duration: 0.1 } }}
                  transition={{
                    duration: 0.25,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <a
                    href="#about"
                    className="uppercase font-bold hover:text-green"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    about
                  </a>
                </motion.li>
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  exit={{ y: -200, transition: { duration: 0.1 } }}
                  transition={{
                    duration: 0.25,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <a
                    href="#projects"
                    className="uppercase font-bold hover:text-green"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    projects
                  </a>
                </motion.li>
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  exit={{ y: -200, transition: { duration: 0.1 } }}
                  transition={{
                    duration: 0.25,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <a
                    href="#contact"
                    className="uppercase font-bold hover:text-green"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    contact
                  </a>
                </motion.li>
              </ul>

              <motion.a
                href="/public/documents/CV.pdf"
                className="button"
                variants={buttonVariants}
                whileHover="hover"
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200, transition: { duration: 0.1 } }}
                transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
                target="_blank"
              >
                Resume
              </motion.a>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default Menu;
