import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div className="text-white lg:mx-7 py-4 px-4 grid grid-cols-2 mx-12 bg-zinc-950 w-screen bottom-0">
      <div>
        {" "}
        <h1 className="mb-3">Quick Links</h1>
        <Link to="/aboutUs">
          <p>About us</p>
        </Link>
        <Link to="/home">
          <p>Homepage</p>
        </Link>
        <Link to="/bulletinBoard">
          <p>Bulletin Board</p>
        </Link>
        <Link to="/profiles">
          <p>Profiles</p>
        </Link>
        <Link to="/signup">
          <p>Join us</p>
        </Link>
      </div>
      <div className="flex items-center lg:absolute lg:justify-self-center md:justify-end md:pr-12 sm:text-right md:text-center lg:pr-12 py-9">
        <div className="align-middle">
          {" "}
          <p className="mb-3">Created with 🤍 by cre8tive</p>
          <p className="flex ml-12 justify-self-center">cre8ive © 2023</p>
        </div>
      </div>
    </div>
  );
};
export default MainFooter;
