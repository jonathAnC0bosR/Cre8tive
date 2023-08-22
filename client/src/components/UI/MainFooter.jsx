import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div className="text-white lg:mx-7 mb-4 grid grid-cols-2 mx-12 ">
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
      <div className="flex items-center">
        <div>
          {" "}
          <p className="mb-3">Created with 🤍 by cre8tive</p>
          <p className="ml-12">cre8ive © 2023</p>
        </div>
      </div>
    </div>
  );
};
export default MainFooter;
