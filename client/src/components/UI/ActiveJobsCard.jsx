import React from "react";
import {
  LiaCameraSolid,
  LiaPencilAltSolid,
  LiaCubeSolid,
  LiaCodeSolid,
} from "react-icons/lia";
import { BiSolidCircle } from "react-icons/bi";
import "../Pages/Skills/skillStyles.css";
import ProfilePic from "../../assets/images/Profile-circle.png";

const ActiveJobsCard = () => {
  return (
    <div className="relative">
      <div className="mx-4">
        <div className="flex flex-row items-center text-white mx-5 mt-5 mb-1">
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

        <div className="flex flex-row gap-8 mx-auto justify-center text-center">
          <div className="text-shadow my-1 align-center w-100">
            <h3 className="text-white text-lg mb-1 text-shadow">Offers</h3>
            <div className="flex flex-row justify-between">
              {/* Icons of the services */}
              <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 custom-shadow">
                <LiaCameraSolid size={"3em"} className="text-df4088" />{" "}
              </button>
            </div>
          </div>
          <div className="text-shadow my-1 align-center w-100">
            <h3 className="text-white text-lg mb-1 text-shadow">Needs</h3>
            <div className="flex flex-row justify-between">
              {/* Icons of the services */}
              <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 custom-shadow">
                <LiaCubeSolid size={"3em"} className="text-df4088" />{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          {/* Button for seeing more info about the job */}
          <button className="bg-df4088 text-white text-lg font-bold px-7 py-2 m-4 rounded-3xl transition-all duration-300 transform hover:scale-110 custom-shadow">
            More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveJobsCard;
