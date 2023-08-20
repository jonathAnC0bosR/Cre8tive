import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ADD_USER } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";

import Auth from "../../../utils/auth";
import Footer from "../../UI/Footer";
import AnimatedButton from "../../UI/AnimatedButton"; //return to AnimatedButton
// import AnimatedButton from "../UserServices/services";
import img1 from "../../../assets/images/colorPiece1.png";
import img2 from "../../../assets/images/colorPiece2.png";

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isFocused, setIsFocused] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [samePassword, setSamePassword] = useState(true);

  const handleConfirm = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (isFocused) {
        setSamePassword(confirmPassword === formState.password);
      }
    }, 1000);

    return () => {
      //Clean up function
      clearTimeout(identifier);
    };
  }, [confirmPassword, formState.password]);

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
    <>
    <div className="pt-20 lg:text-sm sm:pt-0 lg:pt-0 md:pt-0 bg-gradient-to-r from-[#0C0F11] to-[#22282D] min-h-screen flex justify-center  w-screen">
            <img
          src={img1}
          className="h-3/4 left-0 top-0 absolute z-[1] ">
      </img>
      <img
          src={img2}
          className="h-1/3 right-0 bottom-0 absolute z-[1] ">
      </img>
      <div className="bg-zinc-950 lg:w-1/3 md:w-1/2 w-5/6 p-7  sm:mt-20 lg:mt-20 shadow-xl shadow-slate-950 z-[3]">
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
          <label className="text-white my-3">Confirm password</label>
          <input
            name="confirm"
            type="password"
            className="focus:outline-none mb-1 rounded-md h-7"
            onChange={handleConfirm}
            onFocus={() => setIsFocused(true)}
          />
          {!samePassword && (
            <>
              <label className="text-red-900 font-bold ">
                The passwords does not match
              </label>
            </>
          )}

          {samePassword && <AnimatedButton styles='bg-pink-600' title="Sign up" />}
        </form>
        <Footer account="Have" />
      </div>
    </div>
    </>
  );
};

export default Signup;
