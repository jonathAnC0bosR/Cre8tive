import { useState } from "react";

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../utils/mutations";

import Auth from "../../../utils/auth";
import Footer from "../../UI/Footer";
import AnimatedButton from "../../UI/AnimatedButton";
import img1 from "../../../assets/images/colorPiece1.png";
import img2 from "../../../assets/images/colorPiece2.png";


const Login = () => {
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const togglePassword = () => setPasswordIsShown(!passwordIsShown);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="lg:text-sm pt-20 bg-gradient-to-r from-[#0C0F11] to-[#22282D] min-h-screen flex justify-center items-center w-screen">
      <img
          src={img1}
          className="h-3/4 left-0 top-0 absolute z-[0] ">
      </img>
      <img
          src={img2}
          className="h-1/3 right-0 bottom-0 absolute z-[0] ">
      </img>
      <div className="bg-zinc-950 shadow-xl shadow-stone-950 lg:w-1/3 w-5/6 p-6 sm:mt-40 lg:mt-20 z-[1]">
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <h1 className="text-center text-xl text-white ">Login</h1>
          <label className="text-white my-3">Email:</label>
          <input
            className="focus:outline-none rounded-md h-7 "
            type="text"
            name="email"
            onChange={handleInputChange}
          />
          <label className="text-white my-3">Password:</label>
          <input
            className="focus:outline-none mb-1 rounded-md h-7"
            type={passwordIsShown ? "text" : "password"}
            name="password"
            onChange={handleInputChange}
          />
          <div className="flex  items-center">
            <input onClick={togglePassword} type="checkbox" className="mr-2" />
            <label className="text-white">Show password</label>
          </div>
          <p className="text-white text-end text-sm hover:underline hover:font-bold hover:cursor-pointer">
            Forgot your password?
          </p>
          <AnimatedButton styles='bg-pink-600' title="Login" />
        </form>
        <Footer account="Don't have" />
        
      </div>
    </div>
  );
};

export default Login;
