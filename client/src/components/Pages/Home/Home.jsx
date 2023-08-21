import {
  LiaCameraSolid,
  LiaPencilAltSolid,
  LiaCubeSolid,
  LiaCodeSolid,
  LiaEdit,
} from "react-icons/lia";
import { BiPencil } from "react-icons/bi";
import { MdWavingHand } from "react-icons/md";
import ActiveJobsCard from "../../UI/ActiveJobsCard";
import "../Home/HomeStyles.css";
import Pana1 from '../../../assets/images/Pana-1.png';
import Pana2 from '../../../assets/images/Pana-2.png';
import Pana3 from '../../../assets/images/Pana-3.png';
import Pana4 from '../../../assets/images/Pana-4.png';
import "../Skills/SkillStyles.css";

const Home = (props) => {
  
  return (
    // main div
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col">
      <div className="text-white rounded-bl-lg rounded-br-lg mx-auto sm:m-4 md:mt-24 md:mb-0 md:mx-12 m-50 flex items-center justify-center px-10 pt-10 pb-6">
        <h1 className="text-5xl mr-2">Welcome UserName{props.name}</h1>
        <MdWavingHand size={"3em"} className="ml-2 text-yellow-300" />
      </div>

      <div className="flex flex-col p-8 rounded-lg mx-4 sm:m-4 md:mt-0 md:mb-5 md:mx-12">
        {/* Active Jobs */}
        <div className="mb-8">
          <h2 className="text-white text-2xl text-df4088 font-bold my-4 gap-2">
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
              <div className="relative rounded-b-lg w-80 overflow-hidden relative ">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
                {/* Content */}
                <ActiveJobsCard />
              </div>
            </div>
          </div>
        </div>

        {/* Get Started */}
        <h2 className="text-white text-2xl text-df4088 font-bold my-4 gap-2">
          Get Started!
        </h2>
        <div className="flex flex-row justify-between items-center justify-center mt-1 mb-7">
          <p className="text-white text-lg">
            Show your skills and develop tasks, get known in the cre8ive scene!
          </p>
          <button className="bg-df4088 moving-bar text-xl px-7 pt-3 pb-9 rounded-3xl transition-all duration-300 transform hover:scale-110 custom-shadow relative">
            <div className="flex items-center justify-center">Start a Post</div>
          </button>
        </div>

        {/* Suggested Profiles */}
        <div>
          <h2 className="text-white text-2xl text-df4088 font-bold mt-4 gap-2">
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
          <h2 className="text-white text-2xl text-df4088 font-bold my-4 gap-2">
            Searching for a Job?
          </h2>
          <div className="flex flex-row items-center mt-1 mb-7">
            <span className="text-white text-lg">
              The best way to start, is by doing. Search for anything you might
              be interested and don’t be afraid to collabor
              <p className="text-df4088 inline-block">8</p>!
            </span>
          </div>
        </div>

        {/* Recommended Posts */}
        <div className="mb-8">
          <h2 className="text-white text-2xl text-df4088 font-bold my-4 gap-2">
            Recommended Posts:
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
              <div className="relative rounded-b-lg w-80 overflow-hidden relative ">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
                {/* Content */}
                <ActiveJobsCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
