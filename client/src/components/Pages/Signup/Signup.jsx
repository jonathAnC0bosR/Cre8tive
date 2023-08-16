import { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ADD_USER } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";

import Auth from "../../../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const togglePassword = () => setPasswordIsShown(!passwordIsShown);

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="pt-20 lg:text-sm sm:pt-0 lg:pt-0 md:pt-0 bg-gradient-to-r from-[#0C0F11] to-[#22282D] min-h-screen flex justify-center  w-screen">
      <div className="bg-zinc-950 lg:w-1/3 w-5/6 p-7  sm:mt-20 lg:mt-20 shadow-xl shadow-slate-950">
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <h1 className="text-center text-xl text-white ">Signup</h1>
          <label className="text-white my-3">Email:</label>
          <input
            className="focus:outline-none rounded-md h-7 "
            type="text"
            name="email"
            onChange={handleInputChange}
          />
          <label className="text-white my-3">Username:</label>
          <input
            className="focus:outline-none rounded-md h-7 "
            type="text"
            name="username"
            onChange={handleInputChange}
          />
          <label className="text-white my-3">Password:</label>
          <input
            className="focus:outline-none mb-1 rounded-md h-7 "
            type={passwordIsShown ? "text" : "password"}
            name="password"
            onChange={handleInputChange}
          />
          <div className="flex items-center">
            <input onClick={togglePassword} className="mr-2" type="checkbox" />
            <label className="text-white">Show Password</label>
          </div>

          <motion.button
            className="my-10 h-10  mx-auto w-32 text-white bg-pink-600 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            whileTap={{ scale: 0.8 }}
          >
            Sign up
          </motion.button>
        </form>
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
            Have an account?{" "}
            <Link to={"/login"}>
              {" "}
              <span className="underline hover:font-semibold hover:cursor-pointer">
                Sign in!
              </span>
            </Link>
          </p>
          <Link to={"/"}>
            <p className="underline hover:font-bold hover:cursor-pointer">
              &lt; Go Back to Home Instead
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
