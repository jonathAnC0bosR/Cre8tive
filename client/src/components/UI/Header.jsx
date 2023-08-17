import logo from "../../assets/images/Logo.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (e) => {
      e.preventDefault();
      Auth.logout();
  }
  return (
    <>
      <div className="bg-zinc-950 text-white fixed w-screen grid grid-cols-4 z-[3] items-center ">
        <Link to={"/"}>
          <img
            src={logo}
            className="lg:w-18 lg:h-18 md:w-16 md:h-16 w-10 h-10 ml-8"
          />
        </Link>
        <Link to={"/profile"}>
          <h1 className="lg:block md:block hidden">Profile</h1>
        </Link>
        <Link to={"/jobs"}>
          <h1 className="lg:block md:block hidden">Jobs</h1>
        </Link>
        {Auth.loggedIn() ? (
          <h1 onClick={logout} className="lg:block md:block hidden ">Logout</h1>
        ) : (
          <Link to={"/login"}>
            <h1 className="lg:block md:block hidden ">Login</h1>
          </Link>
        )}

        <Navbar />
      </div>
    </>
  );
};

export default Header;
