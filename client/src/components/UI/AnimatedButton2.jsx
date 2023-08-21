import React from "react";
import { useState } from "react";
import { animate, motion, spring } from "framer-motion";
import "../../index.css";

const AnimatedButton = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className={`${props.styles} backCircle my-10 h-10 mx-auto bg-white text-pink-600 rounded-full`}
      type={props.type}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ 
        scale: 1.5, 
        style: 'bg-white text-white',
        
      }}
      transition={{ type: "spring", stiffness: 400, damping: 21 }}
    >
      <motion.div
        layout
        className="topCircle"
        initial={{ }}
      />
        
    </motion.div>
  );
}



export default AnimatedButton;

