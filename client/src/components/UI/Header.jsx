import logo from "../../assets/images/Logo.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-zinc-950 text-white fixed w-screen grid grid-cols-2 ">
        <img
          src={logo}
          className="lg:w-18 lg:h-18 md:w-16 md:h-16 w-10 h-10 ml-8"
        />
        {/* <Navbar /> */}
      </div>
    </>
  );
};

export default Header;
