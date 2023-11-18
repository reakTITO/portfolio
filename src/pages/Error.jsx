import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Error = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-9xl font-bold text-green">404</h1>
        <h4 className="text-5xl">Page Not Found</h4>
        <motion.div variants={buttonVariants} whileHover="hover">
          <Link to="/" className="button">
            Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
export default Error;
