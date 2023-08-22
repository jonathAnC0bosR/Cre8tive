import {
  LiaCameraSolid,
  LiaPencilAltSolid,
  LiaCubeSolid,
  LiaEdit,
} from "react-icons/lia";
import { BiPencil, BiSolidCircle } from "react-icons/bi";
import { MdWavingHand } from "react-icons/md";
import ActiveJobsCard from "../../UI/ActiveJobsCard";
import Pana1 from "../../../assets/images/Pana-1.png";
import Pana2 from "../../../assets/images/Pana-2.png";
import Pana3 from "../../../assets/images/Pana-3.png";
import Pana4 from "../../../assets/images/Pana-4.png";
import "../../../../src/index.css";
import AnimatedButtonHome from "../../UI/AnimatedButtonHome";
import logo from "../../../assets/images/Logo.png";
import Auth from "../../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_BBPOSTS } from "../../../utils/queries";
import AllUsers from "../../card/allUsers";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Sock from "../../card/sock";
import AllPosts from "../../card/allPosts";
import ActivePosts from "../../card/activePost.jsx";

const Home = () => {
  const authService = Auth;
  const user = authService.getProfile().data;
  const { _id, username } = user;

  const navigate = useNavigate();

  const handleCreatePost = async () => {
    try {
      navigate("/CreateBBpost");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // main div
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col">
      <div className="text-white items-center justify-between pt-[70px] rounded-bl-lg rounded-br-lg px-5 mx-auto sm:mx-4 md:mb-3 md:mx-12 flex pb-6">
        <h1 className="text-3xl mr-2">Welcome {username}</h1>
        {/* <MdWavingHand size={"3em"} className="ml-2 text-yellow-300" /> */}

        <div className="flex items-center justify-center ">
          <div className="flex justify-center text-3xl md:text-4xl lg:text-6xl ">
            <h1 className="text-white   ">Cre</h1>
            <h1 className="text-teal-500 ">8</h1>
            <h1 className="text-white ">tive</h1>
          </div>

          <img
            src={logo}
            className="lg:w-32 lg:h-32 md:w-16 md:h-16 w-10 h-10"
          />
        </div>

        <AnimatedButtonHome
          styles="bg-pink-600"
          title="Start a Post"
          onClick={handleCreatePost}
        />
      </div>
      <div className="flex justify-center">
        <hr className="mb-1 border-t border-gray-300 w-3/4" />
      </div>

      <div className="flex flex-col p-8 rounded-lg mx-4 sm:m-4 md:mt-0 md:mb-5 md:mx-12">
        {/* Active Jobs */}
        <div className="mb-20">
          <h2 className="text-2xl mx-4 text-df4088 font-bold my-4 gap-2">
            Active Jobs:
          </h2>
          {/* Here the cards get stored */}
          <div className="flex overflow-x-scroll custom-scrollbar">
            <ActivePosts />
            <ActivePosts />
            <ActivePosts />
            <ActivePosts className="hidden" />
          </div>
        </div>

        {/* Suggested Profiles */}
        <AllUsers />

        {/* Searching for a Job */}
        <div className="bg-teal-500 rounded-xl m-8 my-12 p-5 pl-8">
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
      </div>

      {/* -------------------empieza */}
      {/* -------------------- Recommended Posts */}
      <div className="mb-8">
        <h2 className="text-white text-center text-2xl font-bold mb-8 gap-2">
          Recommended Posts:
        </h2>

        {/* -----------------Dynamic rendering of cards */}
        <div className="px-2">
          <AllPosts />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-teal-500 text-white text-lg font-bold px-7 py-2 m-4 rounded-3xl transition-all duration-300 transform hover:scale-110 custom-shadow">
            See More...
          </button>
        </div>
        {/*-------------------- fin dynamic render----------------  */}

        <div className="flex justify-center m-20">
          <hr className="mb-1 border-t border-gray-300 w-3/4" />
        </div>

        <div className="bg-teal-500 rounded-xl m-8 my-12 p-5 pl-8">
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
      </div>

      <hr className="my-4 border-t border-gray-300 mx-10" />

      <Sock />

      {/* Footer */}
    </div>
  );
};

export default Home;
