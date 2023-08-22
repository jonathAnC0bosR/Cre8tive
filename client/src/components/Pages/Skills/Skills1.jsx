import SearchBar from "../../UI/SkillsSearchBar";
import { BsFire } from "react-icons/bs";
import { LiaCameraSolid } from "react-icons/lia";
import { LiaPencilAltSolid } from "react-icons/lia";
import { LiaCubeSolid } from "react-icons/lia";
import { LiaCodeSolid } from "react-icons/lia";
import { LiaEdit } from "react-icons/lia";
import JobCard from "../../UI/JobCard";
//import "../Skills/skillStyles.css";
import { useState } from 'react';
import ButtonGroup from "flowbite-react/lib/esm/components/Button/ButtonGroup";


const Skills = () => {
  const [searchType, setSearchType] = useState('offers'); // 'offers' by default
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    console.log("selected button: ", selectedButton)
  };

  const skills =  [["Photo","1"], ["Illustration","2"],  ["UI/UX",3],  ["Graphic Design",4],  ["3D Design", 2 ]];

  return (
    // main div
    <div className=" lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col">

      <div className="pt-20" >
        {/* bg-slate-300 shadow-md shadow-slate-300 */}
      <div className="	  mx-5 rounded  p-4" >
      
        <div><h1 className="text-xl text-center text-white"> Let's find what you're looking for </h1>
        </div>

        <div className="rounded-xl p-5 m-4 border-2 border-gray-300	 " >
          <form className="flex flex-row " > 
          <div className="flex justify-center items-center basis-1/4   "> 
            <button
              className={`${
                searchType === 'offers'
                  ? 'bg-df4088 text-white'
                  : 'bg-gray-300 text-gray-600'
              } py-2 px-4 rounded-l`}
              onClick={() => setSearchType('offers')}>
              Offers
            </button>
            <button
              className={`${
                searchType === 'needs'
                  ? 'bg-df4088 text-white'
                  : 'bg-gray-300 text-gray-600'
              } py-2 px-4 rounded-r`}
              onClick={() => setSearchType('needs')}>
              Needs
            </button>
          </div>
          <div className="flex" >
            <button
              className={`${
                selectedButton === 1  ? 'bg-df4088 text-white' : 'bg-gray-200 text-df4088 '
              } py-2 px-4 mx-2 rounded-full`}
              onClick={() => handleButtonClick(1)}
            >
              Photo
            </button>
            <button
              className={`${
                selectedButton === 2  ? 'bg-df4088 text-white' : 'bg-gray-200 text-df4088 '
              } py-2 px-4 mx-2 rounded-full`}
              onClick={() => handleButtonClick(2)}
            >
              Illustration
            </button>
            <button
              className={`${
                selectedButton === 3  ? 'bg-df4088 text-white' : 'bg-gray-200 text-df4088 '
              } py-2 px-4 mx-2 rounded-full`}
              onClick={() => handleButtonClick(3)}
            >
              UI/UX
            </button>
            <button
              className={`${
                selectedButton === 4  ? 'bg-df4088 text-white' : 'bg-gray-200 text-df4088 '
              } py-2 px-4 mx-2 rounded-full`}
              onClick={() => handleButtonClick(4)}
            >
              Graphic Design
            </button>
            <button
              className={`${
                selectedButton === 5  ? 'bg-df4088 text-white' : 'bg-gray-200 text-df4088 '
              } py-2 px-4 mx-2 rounded-full`}
              onClick={() => handleButtonClick(5)}
            >
              3D Design
            </button>

          </div>
          <button className=" text-pink-600 font-bold bg-white h-10  mx-auto w-32 rounded-full"  >Create Post!</button>
          </form>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-10" />
      {/* <div className="flex justify-center items-center mt-4">
        {
          skills.map((arr, index)=>(
            
            <button
              key={arr._id}
              className={`${
                selectedButton === num  ? 'bg-df4088 text-white' : 'bg-gray-200 text-df4088 '
              } py-2 px-4 mx-2 rounded-full`}
              onClick={() => handleButtonClick(num)}
            >
              {arr[0]}
            </button>
          ))
        }
      </div> */}
      <div className="flex items-center m-16 gap-2">
            <LiaCameraSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">
              Photography
            </h2>
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
                <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
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
                <div className="absolute inset-0 bg-[url('assets/images/Photo-Illustration.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
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
                <div className="absolute inset-0 bg-[url('assets/images/Photo-3D.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
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
                <div className="absolute inset-0 bg-[url('assets/images/Photo-UIUX.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
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
                <div className="absolute inset-0 bg-[url('assets/images/Photo-GDesign.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
                {/* Content */}
                <JobCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      </div>
    </div>
  );
};

export default Skills;
