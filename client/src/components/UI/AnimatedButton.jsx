import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../index.css";

const AnimatedButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className={`moving-bar ${props.styles} my-10 h-10 mx-auto text-white rounded-full`}
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

export default AnimatedButton;
