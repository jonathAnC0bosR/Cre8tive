import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="text-white text-center">
      <fieldset className="border-t border-slate-300">
        <legend className="px-4">Or</legend>
      </fieldset>
      <div className="grid grid-cols-2 mb-5">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/gmail-new.png"
          alt="gmail-new"
          className="mx-auto"
        />
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/facebook.png"
          alt="facebook"
          className="mx-auto"
        />
      </div>
      <p>
        {props.account} an account?{" "}
        {props.account === "Have" ? (
          <Link to={"/login"}>
            {" "}
            <span className="underline hover:font-semibold hover:cursor-pointer">
              Sign in!
            </span>
          </Link>
        ) : (
          <Link to={"/signup"}>
            {" "}
            <span className="underline hover:font-semibold hover:cursor-pointer">
              Create One!
            </span>
          </Link>
        )}
      </p>
      <Link to={"/"}>
        <p className="underline hover:font-bold hover:cursor-pointer">
          &lt; Go Back to Home Instead
        </p>
      </Link>
    </div>
  );
};

export default Footer;
