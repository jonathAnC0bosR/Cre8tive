import { motion } from "framer-motion";


const AnimatedButton = (props) => {
  return (
    <motion.button
      className={`${props.styles} my-10 h-10  mx-auto w-32 text-white rounded-full`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
      whileTap={{ scale: 0.8 }}
      type={props.type}
    >
      {props.title}
    </motion.button>
  );
};

export default AnimatedButton;
