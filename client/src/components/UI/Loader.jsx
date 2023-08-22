import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loaderImg from '../../assets/images/loader.gif';
import loaderBg from '../../assets/images/loader-bg.gif';  

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

function Loader({ isLoading }) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
          {/* Background Loader */}
          <motion.div
            key="background-loader"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInOut}
            className="fixed top-0 left-0 w-full h-full bg-center bg-repeat z-50"
            style={{ backgroundImage: loaderBg }}
          />

          {/* Primary Loader */}
          <motion.img
            key="loader"
            src={loaderImg}
            alt="Loading..."
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInOut}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-80"
          />
        </>
      )}
    </AnimatePresence>
  );
}



export default Loader;
