import backImg from "../../../assets/images/example-img.png";
import { useState, useEffect } from "react";
import { BiCircle, BiEditAlt } from "react-icons/bi";
import { RiUserReceivedFill } from "react-icons/ri";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BiSolidTimer, BiSolidCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_SINGLE_POST } from "../../../utils/queries";
import { UPDATE_POST_STATUS } from "../../../utils/mutations";

import AnimatedButton from "../../UI/AnimatedButton";
import ServicesButton from "../UserServices/servicesModal";
import MainFooter from "../../UI/MainFooter";
import Photo from "../../../assets/images/Photo-UIUX.png";
import FormElement from "../UserServices/servicesModal2";

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const BBpost = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_POST, {
    variables: {
      bulletinId: id,
    },
  });
  const post = data?.bulletin || [];
  const user = { ...post.userID };
  const isActive = post.isActive;

  const [updateStatus, { error }] = useMutation(UPDATE_POST_STATUS);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Job Accepted");

    try {
      const { data } = await updateStatus({
        variables: {
          bulletinID: id,
        },
      });

      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    // main div
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col justify-center w-screen">
      <div className="bg-gradient-to-r from-[#353434] to-[#424141] text-white rounded-lg flex-grow  place-self-center mx-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-5/6 ">
        <img src={backImg} className="w-full h-96" alt="Background Image"></img>
        <div className="flex flex-row justify-between px-10 py-8">
          <h1 className="text-3xl">{post.bulletPostTitle}</h1>
        </div>
        <p className="pr-10 pl-10 pb-10">{post.bulletText}</p>
      </div>
      <div className="text-white lg:w-1/2 mt-5 rounded flex-grow place-self-center mx-4 ">
        <div className="grid grid-cols-3">
          <div>
            <img src={Photo} className="w-32 rounded-full" />
          </div>
          <div className="ml-4">
            <p>{user.location}</p>
            <h1 className="text-4xl">{user.username}</h1>
            <div className="flex flex-row text-shadow text-lg">
              <BiSolidCircle className="text-df4088" />
              <BiSolidCircle className="text-df4088" />
              <BiSolidCircle className="text-df4088" />
              <BiSolidCircle className="text-df4088" />
              <BiSolidCircle className="text-gray-200" />
            </div>
          </div>
          <div className="flex items-center flex-col ml-10">
            {isActive && (
              <>
                <h1 className="text-green-500 text-2xl ">Active</h1>
                <BiSolidCircle size="1.5em" className="text-green-500 " />{" "}
              </>
            )}
            {!isActive && (
              <>
                <h1 className="text-slate-500 text-2xl ">Unactive</h1>
                <BiSolidCircle size="1.5em" className="text-slate-500 " />{" "}
              </>
            )}
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col my-10 bg-gradient-to-r from-[#353434] to-[#424141] place-self-center p-8 rounded-lg mx-4 lg:w-1/2 md:w-1/2 w-5/6"
      >
        <div className="flex justify-between items-center mb-4 ml-3">
          <div className="flex flex-row items-center">
            <RiUserReceivedFill size={"2.8em"} color="pink" />
            <h2 className="text-white">Service Offered</h2>
          </div>
          <p className="bg-pink-500 text-white px-4 py-3 rounded-3xl">
            Graphic
          </p>
        </div>
        <div className="flex items-center mb-4 justify-between">
          <div className="flex flex-row items-center">
            <BsFillSendCheckFill size={"2.5em"} color="pink" />
            <h2 className="text-white ml-3">Service In Need</h2>
          </div>
          <p className="bg-pink-500 text-white px-4 py-3 rounded-3xl">UX/UI</p>
        </div>
        <div className="flex items-center mb-4 justify-between">
          <div className="flex flex-row items-center">
            {" "}
            <BiSolidTimer size={"3em"} color="pink" />
            <h2 className="text-white ml-3">Delivery Time</h2>
          </div>
          <p className="bg-pink-500 text-white px-4 py-3 rounded-3xl">3W</p>
        </div>

        <AnimatedButton type="submit" styles="bg-pink-500" title="Accept job" />
      </form>
    </div>
  );
};

export default BBpost;
