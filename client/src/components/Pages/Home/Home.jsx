import { BiPencil } from "react-icons/bi";
import { MdWavingHand } from "react-icons/md";
import ActiveJobsCard from "../../UI/ActiveJobsCard";
import "../Home/HomeStyles.css";
import Pana1 from "../../../assets/images/Pana-1.png";
import Pana2 from "../../../assets/images/Pana-2.png";
import Pana3 from "../../../assets/images/Pana-3.png";
import Pana4 from "../../../assets/images/Pana-4.png";
import "../Skills/SkillStyles.css";

import Auth from "../../../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import {} from "../../../utils/mutations";
import { GET_BBPOSTS } from "../../../utils/queries";
import AllUsers from "../../card/allUsers";

import {
  LiaCameraSolid,
  LiaPencilAltSolid,
  LiaCubeSolid,
  LiaCodeSolid,
} from "react-icons/lia";
import { BiSolidCircle } from "react-icons/bi";
import "../../Pages/Skills/skillStyles.css";

const Home = (props) => {
  const authService = Auth;

  const user = authService.getProfile().data;
  const { _id, username } = user;

  const { loading, data } = useQuery(GET_BBPOSTS);
  const bbPosts = data?.bulletinPosts || [];
  console.log("data from query: ", loading, bbPosts);
  // const isUserAuthor = _id === bbPosts.userID._id;

  return (
    // main div
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col">
      <div className="text-white rounded-bl-lg rounded-br-lg mx-auto sm:m-4 md:mt-24 md:mb-0 md:mx-12 m-50 flex items-center justify-center px-10 pt-10 pb-6">
        <h1 className="text-5xl mr-2">Welcome {username}</h1>
        <MdWavingHand size={"3em"} className="ml-2 text-yellow-300" />
      </div>

      <div className="flex flex-col p-8 rounded-lg mx-4 sm:m-4 md:mt-0 md:mb-5 md:mx-12">
        {/* Active Jobs */}
        <div className="mb-8">
          <h2 className="text-2xl text-df4088 font-bold my-4 gap-2">
            Active Jobs:
          </h2>
          {/* Here the cards get stored */}
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex flex-col mb-5">
              {/* Card Title */}
              <div className="flex flex-row justify-between text-white text-lg font-bold bg-df4088 rounded-t-lg pl-8 pr-4 pt-3 pb-2">
                <h3>Portraits 4 Grad</h3>
                <button>
                  <BiPencil size={"1.5em"} />
                </button>
              </div>
              {/* Card */}
              <div className="relative rounded-b-lg w-80 overflow-hidden">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>{" "}
                {/* Content */}
                <ActiveJobsCard />
              </div>
            </div>
          </div>
        </div>

        {/* Get Started */}
        <h2 className="text-white text-2xl font-bold my-4 gap-2">
          Get Started!
        </h2>
        <div className="flex flex-row items-center justify-center mt-1 mb-7">
          <p className="text-white text-lg">
            Show your skills and develop tasks, get known in the cre8ive scene!
          </p>
          <button className="bg-df4088 moving-bar text-xl px-7 pt-3 pb-9 rounded-3xl transition-all duration-300 transform hover:scale-110 custom-shadow relative">
            <div className="flex items-center justify-center">Start a Post</div>
          </button>
        </div>

        {/* Suggested Profiles */}

        <div>
          <h2 className="text-white text-2xl font-bold mt-4 gap-2">
            Suggested Profiles
          </h2>
          <div className="flex flex-row overflow-x-scroll custom-scrollbar gap-9 mt-1 mb-7">
            <img src={Pana1} className="h-44 w-44 my-8" />
            <img src={Pana2} className="h-44 w-44 my-8" />
            <img src={Pana3} className="h-44 w-44 my-8" />
            <img src={Pana4} className="h-44 w-44 my-8" />
            <img src={Pana1} className="h-44 w-44 my-8" />
            <img src={Pana2} className="h-44 w-44 my-8" />
            <img src={Pana3} className="h-44 w-44 my-8" />
            <img src={Pana4} className="h-44 w-44 my-8" />
          </div>
        </div>

        {/* Searching for a Job */}
        <div>
          <h2 className="text-white text-2xl font-bold my-4 gap-2">
            Searching for a Job?
          </h2>
          <div className="flex flex-row items-center mt-1 mb-7">
            <span className="text-white text-lg">
              The best way to start, is by doing. Search for anything you might
              be interested and don't be afraid to collabor
              <p className="text-df4088 inline-block">8</p>!
            </span>
          </div>
        </div>

        {/* -------------------- Recommended Posts */}
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold my-4 gap-2">
            Recommended Posts:
          </h2>

          {/* Dynamic rendering of cards */}
          <div className="flex overflow-x-scroll custom-scrollbar">
            {loading ? (
              <div>Loading...</div>
            ) : (
              bbPosts.map((post) => (
                <div key={post.id} className="flex flex-col mb-5 mx-2">
                  <div className="flex flex-row justify-between text-white text-lg font-bold bg-df4088 rounded-t-lg pl-8 pr-4 pt-3 pb-2">
                    <h3>{post.bulletPostTitle}</h3>
                    {/* {isUserAuthor && (
                    <button>
                      <BiPencil size={"1.5em"} />
                    </button>
                  )}  */}
                  </div>
                  {/* Card */}
                  <div className="relative rounded-b-lg w-80 overflow-hidden relative ">
                    {/* Pseudo-element for the blurred background */}
                    {post.imageURL ? (
                      <img
                        src={post.imageURL}
                        className="absolute inset-0 bg-cover bg-center filter blur-xs shadow-inner shadow"
                      ></img>
                    ) : (
                      <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
                    )}

                    {/* Content */}
                    {/* <ActiveJobsCard /> */}
                    <div className="relative">
                      <div className="mx-4">
                        <div className="flex mb-4 flex-row items-center text-white mx-5 mt-5 mb-1">
                          {/* User Profile Picture */}
                          <div className="overflow-hidden rounded-full w-16 h-16 ">
                            <img
                              src={post.userID.profileImage}
                              alt="Circular Image"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-column ml-4">
                            {/* User Location */}
                            <p className="text-xs text-shadow">
                              {post.userID.location}{" "}
                            </p>
                            {/* Username */}
                            <p className="text-xl font-bold text-shadow">
                              {post.userID.username}
                            </p>
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
                        {/* Card */}
                        <div className="relative rounded-b-lg w-80 overflow-hidden">
                          {/* Pseudo-element for the blurred background */}
                          {post.imageURL ? (
                            <img
                              src={post.imageURL}
                              className="absolute inset-0 bg-cover bg-center filter blur-xs shadow-inner shadow"
                            ></img>
                          ) : (
                            <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
                          )}

                          {/* Content */}
                          {/* <ActiveJobsCard /> */}
                          <div className="relative">
                            <div className="mx-4">
                              <div className="flex mb-4 flex-row items-center text-white mx-5 mt-5 ">
                                {/* User Profile Picture */}
                                <div className="overflow-hidden rounded-full w-16 h-16 ">
                                  <img
                                    src={post.userID.profileImage}
                                    alt="Circular Image"
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                <div className="flex-column ml-4">
                                  {/* User Location */}
                                  <p className="text-xs text-shadow">
                                    {post.userID.location}{" "}
                                  </p>
                                  {/* Username */}
                                  <p className="text-xl font-bold text-shadow">
                                    {post.userID.username}
                                  </p>
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

                              {/* <div className="flex flex-row gap-8 mx-auto justify-center text-center">

                    <div className="text-shadow my-1 align-center w-100">
                      <h3 className="text-white text-lg mb-1 text-shadow">Needs</h3>
                      <div className="flex flex-row justify-between"> */}
                              {/* Icons of the services */}
                              {/* <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 custom-shadow">
                          <LiaCubeSolid size={"3em"} className="text-df4088" />{" "}
                        </button>
                      </div>
                      

                      
                    </div> */}

                              {/* <div className="text-shadow my-1 align-center w-100">
                      <h3 className="text-white text-lg mb-1 text-shadow">Offers</h3>
                      <div className="flex flex-row justify-between"> */}
                              {/* Icons of the services */}
                              {/* <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 custom-shadow">
                          <LiaCameraSolid size={"3em"} className="text-df4088" />{" "}
                        </button>
                      </div>
                    </div>



                    

                  </div> */}

                              <div className="flex m-2 items-center justify-center gap-8 mx-auto bg-white rounded-full ">
                                <div>
                                  <h3 className="text-pink-600 text-lg font-bold mb-1">
                                    Needs
                                  </h3>
                                </div>
                                <div>
                                  {post.serviceNeed &&
                                    post.serviceNeed.length > 0 && (
                                      <p className="text-lg font-bold ">
                                        {post.serviceNeed[0].skillTitle}
                                      </p>
                                    )}
                                </div>
                              </div>

                              <div className="flex m-2 items-center justify-center gap-8 mx-auto bg-white rounded-full ">
                                <div>
                                  <h3 className="text-pink-600 font-bold text-lg mb-1 ">
                                    Offers
                                  </h3>
                                </div>
                                <div>
                                  {post.serviceNeed &&
                                    post.serviceNeed.length > 0 && (
                                      <p className="text-lg font-bold ">
                                        {post.serviceOffer[0].skillTitle}
                                      </p>
                                    )}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/*-------------------- SE ACABA CARD----------------  */}
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
