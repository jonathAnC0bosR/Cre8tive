import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import NavLink from "./NavLink";

import Auth from "../../utils/auth";

const Navbar = () => {

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  }

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
    <div
      ref={navRef}
      className="fixed top-0 right-0 z-50 lg:text-sm md:hidden lg:hidden"
    >
      {isOpen ? (
        <>
          <div className="text-white">
            <motion.div
              animate={{ width: "180px" }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-zinc-950  max-h-fit"
            >
              {" "}
              <div className="lg:p-3 md:p-3  p-1 hover:cursor-pointer">
                <FaBars onClick={toggleNav} size={"2em"} />
              </div>
              <div className="p-4">
                <div className="grid grid-rows-4 ">
                  <NavLink
                    hover="hover:bg-pink-500"
                    route="/"
                    onClick={toggleNav}
                    title="Home"
                  >
                    <AiOutlineHome size={"2em"} color="pink" />
                  </NavLink>
                  <NavLink
                    hover="hover:bg-orange-700"
                    route="/profile"
                    onClick={toggleNav}
                    title="Profile"
                  >
                    <GoPerson size={"2em"} color="pink" />
                  </NavLink>
                  <NavLink
                    hover="hover:bg-teal-600"
                    route="/jobs"
                    onClick={toggleNav}
                    title="Jobs"
                  >
                    <LuSearch size={"2em"} color="pink" />
                  </NavLink>
                  {Auth.loggedIn() ? (
                    <NavLink
                      hover="hover:bg-yellow-600"
                      route="/"
                      onClick={logout}
                      title="Logout"
                    >
                      <BiLogOut size={"2em"} color="pink" />
                    </NavLink>
                  ) : (
                    <NavLink
                      hover="hover:bg-yellow-600"
                      route="/login"
                      onClick={toggleNav}
                      title="Login"
                    >
                      <BiLogOut size={"2em"} color="pink" />
                    </NavLink>
                  )}
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
