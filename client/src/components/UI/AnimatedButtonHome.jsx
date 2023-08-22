import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../index.css";

const AnimatedButtonHome = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className={`moving-bar ${props.styles} bg-df4088 moving-bar text-xl px-7 pt-3 pb-9 rounded-3xl transition-all duration-300 transform hover:scale-110 custom-shadow relative`}
      type={props.type}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{
        scale: 1.1,
        color: "#DF4088 !important",
        borderRadius: "50px",
      }}
    >
      <div className="flex items-center justify-center">{props.title}</div>
      <motion.div layout className="topCircle" initial={{}} />
      <div className="moving-bar-after"></div>
    </motion.button>
  );
};

export default AnimatedButtonHome;
