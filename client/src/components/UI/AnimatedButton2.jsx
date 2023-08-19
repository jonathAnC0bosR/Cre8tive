import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "././index.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="backCircle"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="topCircle" />
    </motion.div>
  );
}