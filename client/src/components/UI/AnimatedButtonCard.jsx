import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../index.css";

const AnimatedButtonCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className={`moving-bar ${props.styles} text-base font-bold m-4 rounded-2xl custom-shadow justify-center`}
      type={props.type}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{
        scale: 1.04,
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

export default AnimatedButtonCard;
