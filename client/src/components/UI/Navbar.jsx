import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      //Clean up function
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className="fixed top-0 right-0 z-50">
      {isOpen ? (
        <>
          <div className="text-white">
            <motion.div
              animate={{ width: "180px" }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-zinc-950  max-h-fit"
            >
              {" "}
              <div className="lg:p-3 md:p-3 p-1 hover:cursor-pointer">
                <FaBars onClick={toggleNav} size={"2em"} />
              </div>
              <div className="m-4 ">
                <div className="grid grid-rows-4 ">
                  <div className="flex flex-row items-center mb-3">
                    {" "}
                    <AiOutlineHome size={"2em"} color="pink" />
                    <p className="mx-auto">Home</p>
                  </div>
                  <div className="flex flex-row items-center mb-3">
                    {" "}
                    <GoPerson size={"2em"} color="pink" />
                    <p className="mx-auto">Profile</p>
                  </div>
                  <div className="flex flex-row items-center mb-3">
                    {" "}
                    <LuSearch size={"2em"} color="pink" />
                    <p className="mx-auto">Jobs</p>
                  </div>
                  <div className="flex flex-row items-center mb-3">
                    {" "}
                    <BiLogOut size={"2em"} color="pink" />
                    <p className="mx-auto">Logout</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      ) : (
        <div className=" hover:cursor-pointer">
          <motion.div animate={{ width: "0px" }} className="px-14">
            {" "}
            <div className="lg:p-3 md:p-3 p-1">
              <FaBars onClick={toggleNav} size={"2em"} />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
