import SearchBar from "../../UI/SkillsSearchBar";
import { BsFire } from "react-icons/bs";
import { LiaCameraSolid } from "react-icons/lia";
import { LiaPencilAltSolid } from "react-icons/lia";
import { LiaCubeSolid } from "react-icons/lia";
import { LiaCodeSolid } from "react-icons/lia";
import { LiaEdit } from "react-icons/lia";
import JobCard from "../../UI/JobCard";
import "../Skills/skillStyles.css";
import { useState } from 'react';
import CardOffer from '../../card/byOffer'
import CardNeed from '../../card/card'


const Skills = () => {
  const [searchType, setSearchType] = useState('offers'); // 'offers' by default
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    console.log("selected button: ", selectedButton)
  };


  return (
    // main div
    <div className=" lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col">

      <div className="pt-20" >
        {/* bg-slate-300 shadow-md shadow-slate-300 */}
      <div className="	  mx-5 rounded  p-4" >
      
        <div><h1 className="text-xl text-center text-white"> Let's find what you're looking for </h1>
        </div>

        <div className="rounded-xl p-5 m-4 border-2 border-gray-300	 " >
          <form className="flex flex-row items-center justify-center " > 
          <div className="flex justify-center items-center basis-1/4   "> 
            <button
              className={`${
                searchType === 'offers'
                  ? 'bg-df4088 text-white py-2.5 px-4  '
                  : 'bg-gray-300 text-gray-600 py-2 px-4'
              } rounded-l`}
              onClick={() => setSearchType('offers')}>
              Offers
            </button>
            <button
              className={`${
                searchType === 'needs'
                  ? 'bg-df4088 text-white py-2.5 px-4  '
                  : 'bg-gray-300 text-gray-600 py-2 px-4'
              } rounded-r`}
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

          <button className=" text-pink-600 font-bold text-xl  h-10  mx-auto w-32 underline underline-offset-4"  >Find</button>
          </form>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-10" />

      <div className="flex items-center m-16 gap-2">
            <LiaCameraSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">
              Photography!
            </h2>
      </div>

      <div>
      <CardOffer title={"Photo"} />
      </div>





      {/* Footer */}
      </div>
    </div>
  );
};

export default Skills;
