import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.25,
    },
  },
};

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarTop, setNavbarTop] = useState("0");

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setNavbarTop("-80px"); // hides the navbar by moving it up
      } else {
        setNavbarTop("0"); // shows the navbar by moving it down
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollTop]);

  return (
    <nav
      className="w-full bg-navy py-4 fixed transition-all duration-300 backdrop-blur-lg opacity-90"
      style={{ top: navbarTop }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 xl:px-16">
        <motion.h2
          className="uppercase font-bold text-2xl"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          whileHover={{ color: "#64ffda" }}
          transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
        >
          <Link to="/">vireak</Link>
        </motion.h2>

        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-6">
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
            >
              <a
                href="#about"
                className="uppercase font-bold text-sm hover:text-green"
              >
                about
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.25,
                type: "spring",
                stiffness: 300,
              }}
            >
              <a
                href="#projects"
                className="uppercase font-bold text-sm hover:text-green"
              >
                projects
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
            >
              <a
                href="#contact"
                className="uppercase font-bold text-sm hover:text-green"
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
            transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
            target="_blank"
          >
            Resume
          </motion.a>
        </div>

        <motion.button
          type="button"
          className="md:hidden text-4xl text-green"
          whileTap={{ rotate: 180 }}
        >
          <RiMenu3Fill />
        </motion.button>
      </div>
    </nav>
  );
};
export default Navbar;
