import { motion } from "framer-motion";

const AnimatedButton = (props) => {
  return (
    <motion.button
      className="my-10 h-10  mx-auto w-32 text-white bg-pink-600 rounded-full"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
      whileTap={{ scale: 0.8 }}
    >
      {props.title}
    </motion.button>
  );
};

export default AnimatedButton;
