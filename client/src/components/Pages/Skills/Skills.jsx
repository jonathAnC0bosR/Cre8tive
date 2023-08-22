import SearchBar from "../../UI/SkillsSearchBar";
import { BsFire } from "react-icons/bs";
import { LiaCameraSolid } from "react-icons/lia";
import { LiaPencilAltSolid } from "react-icons/lia";
import { LiaCubeSolid } from "react-icons/lia";
import { LiaCodeSolid } from "react-icons/lia";
import { LiaEdit } from "react-icons/lia";
import JobCard from "../../UI/JobCard";
import "../../../../src/index.css";

const Skills = () => {
  return (
    // main div
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col">
      <div className="bg-gradient-to-r from-[#353434] to-[#424141] text-white rounded-bl-lg rounded-br-lg mx-4 sm:m-4 md:mt-12 md:mb-0 md:mx-12 mb-50 flex flex-row justify-between px-10 pt-10 pb-6">
        <div className="flex flex-row justify-between items-center gap-2">
          <h1 className="text-3xl">Skills </h1>
          <BsFire size={"2.8em"} color="red" />
        </div>
        <SearchBar />
      </div>

      <div className="flex flex-col p-8 rounded-lg mx-4 sm:m-4 md:mt-0 md:mb-5 md:mx-12">
        {/* Photography */}
        <div className="mb-8">
          {/* Title of the section with icon */}
          <div className="flex items-center mb-4 gap-2">
            <LiaCameraSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">
              Photography
            </h2>
          </div>
          {/* Here the cards get stored */}
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex flex-col mb-5">
              {/* Card Title */}
              <h3 className="text-white text-lg font-bold bg-df4088 rounded-t-lg px-8 pt-3 pb-2">
                Portraits 4 Grad
              </h3>
              {/* Card */}
              <div className="relative rounded-b-lg w-72 overflow-hidden ">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                {/* Content */}
                <JobCard />
              </div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          {/* Title of the section with icon */}
          <div className="flex items-center mb-4 gap-2">
            <LiaPencilAltSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">
              Illustration
            </h2>
          </div>
          {/* Here the cards get stored */}
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex flex-col mb-5">
              {/* Card Title */}
              <h3 className="text-white text-lg font-bold bg-df4088 rounded-t-lg px-8 pt-3 pb-2">
                Portraits 4 Grad
              </h3>
              {/* Card */}
              <div className="relative rounded-b-lg w-72 overflow-hidden ">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo-Illustration.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                {/* Content */}
                <JobCard />
              </div>
            </div>
          </div>
        </div>

        {/* 3D Design */}
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            <LiaCubeSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">
              3D Design
            </h2>
          </div>
          {/* Here the cards get stored */}
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex flex-col mb-5">
              {/* Card Title */}
              <h3 className="text-white text-lg font-bold bg-df4088 rounded-t-lg px-8 pt-3 pb-2">
                Portraits 4 Grad
              </h3>
              {/* Card */}
              <div className="relative rounded-b-lg w-72 overflow-hidden  ">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo-3D.png')] bg-cover bg-center filter blur-xs shadow-inner "></div>
                {/* Content */}
                <JobCard />
              </div>
            </div>
          </div>
        </div>

        {/* UI/UX */}
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            <LiaCodeSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">UI/UX</h2>
          </div>
          {/* Here the cards get stored */}
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex flex-col mb-5">
              {/* Card Title */}
              <h3 className="text-white text-lg font-bold bg-df4088 rounded-t-lg px-8 pt-3 pb-2">
                Portraits 4 Grad
              </h3>
              {/* Card */}
              <div className="relative rounded-b-lg w-72 overflow-hidden ">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo-UIUX.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                {/* Content */}
                <JobCard />
              </div>
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            <LiaEdit size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">
              Graphic Design
            </h2>
          </div>
          {/* Here the cards get stored */}
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex flex-col mb-5">
              {/* Card Title */}
              <h3 className="text-white text-lg font-bold bg-df4088 rounded-t-lg px-8 pt-3 pb-2">
                Portraits 4 Grad
              </h3>
              {/* Card */}
              <div className="relative rounded-b-lg w-72 overflow-hidden ">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo-GDesign.png')] bg-cover bg-center filter blur-xs shadow-inner "></div>
                {/* Content */}
                <JobCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Skills;
