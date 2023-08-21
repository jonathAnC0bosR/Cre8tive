import logo from "../../assets/images/Logo.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (e) => {
      e.preventDefault();
      Auth.logout();
  }
  //justify-evenly
  return (
    <>
      <div className="bg-zinc-950 text-white fixed w-screen grid grid-cols-10 z-[10] items-center ">
        <Link to={"/"}>            
          <img
            src={logo}
            className="lg:w-18 lg:h-18 md:w-16 md:h-16 w-10 h-10 ml-8"
          />
        </Link>

        {Auth.loggedIn() ? (
          <div className="col-span-9 ">
            <div className="flex items-center grid grid-cols-9" >

            <Link className="col-start-2 text-center" to={"/profile"}>
              <h1 className="lg:block md:block hidden p-1 hover:bg-pink-600 hover:rounded-full">Profile</h1>
            </Link>

            <Link className="col-start-5 text-center" to={"/jobs"}>
              <h1 className="lg:block md:block hidden p-1 hover:bg-orange-500 hover:rounded-full">Jobs</h1>
            </Link>

            <h1 onClick={logout} to={"/"} className="lg:block md:block hidden col-end-10 col-span-2 text-center 
            p-1 w-1/2 hover:bg-teal-500 hover:rounded-full">Logout</h1>
            </div>
          </div>
        ) : (
          <Link className="col-start-9 col-end-10 text-center
          p-1 w-1/2 hover:bg-orange-500 hover:rounded-full" to={"/login"}>
            <h1 className="lg:block md:block hidden ">Login</h1>
          </Link>
        )}

        <Navbar />
      </div>
    </>
  );
};

export default Header;
