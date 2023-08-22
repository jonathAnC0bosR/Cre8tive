import React from "react";
import {
  LiaCameraSolid,
  LiaPencilAltSolid,
  LiaCubeSolid,
  LiaCodeSolid,
} from "react-icons/lia";
import { BiSolidCircle } from "react-icons/bi";
import "../../../src/index.css";
import ProfilePic from "../../assets/images/Profile-circle.png";
import AnimatedButtonCard from "./AnimatedButtonCard";

const JobCard = () => {
  return (
    <div className="relative">
      <div className="mx-4">
        <div className="flex flex-row items-center text-white mx-5 mt-7 mb-4">
          {/* User Profile Picture */}
          <div className="profilePic-shadow shadow-inner rounded-full">
            <img
              src={ProfilePic}
              className="w-16 h-16 justify-center"
              alt="User Profile"
            />
          </div>
          <div className="flex-column ml-4">
            {/* User Location */}
            <p className="text-xs text-shadow">CDMX</p>
            {/* Username */}
            <p className="text-xl font-bold text-shadow">User123123</p>
            {/* User Rating */}
            <div className="flex flex-row text-shadow text-lg">
              <BiSolidCircle className="text-df4088" />
              <BiSolidCircle className="text-df4088" />
              <BiSolidCircle className="text-df4088" />
              <BiSolidCircle className="text-df4088" />
              <BiSolidCircle className="text-gray-200" />
            </div>
          </div>
        </div>

        <div className="text-shadow mx-5 my-1 align-center w-100">
          <h3 className="text-white text-xl mb-2 text-shadow">Offers...</h3>
          <div className="flex flex-row justify-between">
            {/* Icons of the services */}
            <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 custom-shadow">
              <LiaCameraSolid size={"2.6em"} className="text-df4088" />{" "}
            </button>
            <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 custom-shadow">
              <LiaPencilAltSolid size={"2.6em"} className="text-df4088" />{" "}
            </button>
            <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 custom-shadow">
              <LiaCubeSolid size={"2.6em"} className="text-df4088" />{" "}
            </button>
          </div>
        </div>
        <div className="text-shadow mx-5 my-1 align-center w-100">
          <h3 className="text-white text-xl mt-3 mb-2 text-shadow">Needs...</h3>
          <div className="flex flex-row justify-between">
            {/* Icons of the services */}
            <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 custom-shadow">
              <LiaCodeSolid size={"2.3em"} className="text-df4088" />{" "}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* Button for seeing more info about the job */}
          <AnimatedButtonCard title="More..."/>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
