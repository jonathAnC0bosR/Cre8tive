import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../index.css";

const AnimatedButtonSlide = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className={`bg-df4088 moving-bar text-xl px-7 pt-3 pb-9 rounded-3xl transition-all duration-300 transform hover:scale-110 custom-shadow relative ${props.styles}`}
      type={props.type}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{
        scale: 1.5,
        backgroundColor: "#fff",
        color: "#DF4088",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 21 }}
    >
      <div className="flex items-center justify-center">{props.title}</div>
      <motion.div layout className="topCircle" initial={{}} />
      <div className="moving-bar-after"></div>
    </motion.button>
  );
};

export default AnimatedButtonSlide;
