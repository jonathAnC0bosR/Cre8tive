import { LiaCubeSolid } from "react-icons/lia";
import "../Skills/skillStyles.css";
import { useState } from 'react';
import CardOffer from '../../card/byOffer'
import CardNeed from '../../card/byNeed'
import Sock from '../../card/sock'


const Skills = () => {
  const [searchType, setSearchType] = useState(["lucas", "Matt"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const drop1 = e.target.querySelector("#drop1").value;
    const selectedOption = e.target.querySelector("#skills").value;
    console.log(drop1, selectedOption)
    setSearchType([drop1, selectedOption]);
  }

  return (
    // main div
    <div className=" lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col">

      <div className="pt-20" >
        {/* bg-slate-300 shadow-md shadow-slate-300 */}
      <div className="	  mx-5 rounded  p-4" >
      
        <div><h1 className="text-xl text-center text-white"> Let's find what you're looking for </h1>
        </div>

        <div className="rounded-xl p-5 m-4 border-2 border-gray-300	 " >
          <form className="flex flex-row items-center justify-center " onSubmit={handleSubmit} > 
            {/* <div className="flex justify-center items-center basis-1/3   "> 
              <button type="button"
                className={`${
                  searchType === 'offer'
                    ? 'bg-df4088 text-white py-2.5 px-4  '
                    : 'bg-white text-gray-600 py-2 px-4'
                } rounded-l`}
                // onClick={() => setSearchType('offer')}
                >
                Offers
              </button>
              <button type="button"
                className={`${
                  searchType === 'need'
                    ? 'bg-df4088 text-white py-2.5 px-4  '
                    : 'bg-white text-gray-600 py-2 px-4'
                } rounded-r`}
                // onClick={() => setSearchType('need')}
                >
                Needs
              </button>
            </div> */}
            
            <div className="basis-1/3 flex items-center justify-center " >
              <select id="drop1" className="rounded-full text-pink-600 font-bold px-12
              border border-pink-600 focus:ring-2 focus:ring-df4088 focus:border-transparent" >
                <option value="offer" className="text-center" >Offers</option>
                <option value="need" className="text-center">Needs</option>
              </select>
            </div>

            <div className="basis-1/3 flex items-center justify-center " >
              <select id="skills" className="rounded-full text-pink-600 font-bold
              border border-pink-600 focus:ring-2 focus:ring-df4088 focus:border-transparent" >
                <option value="UI/UX" className="text-center" >UI/UX</option>
                <option value="Illustration" className="text-center">Illustration</option>
                <option value="Photo" className="text-center">Photo</option>
                <option value="Graphic Design" className="text-center">Graphic Design</option>
                <option value="3D Design" className="text-center">3D Design</option>
              </select>
            </div>


            {/* <div className="flex" >
            <button
              className={`${
                selectedButton === 1  ? 'bg-df4088 text-white' : 'bg-gray-200 text-df4088 '
              } py-2 px-4 mx-2 rounded-full`}
              onClick={() => handleButtonClick(1)}
            >
              UI/UX
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
              Photo
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
            </div> */}

          <div className="basis-1/3 flex justify-center" >
          <button className=" text-pink-600 font-bold text-xl  
          h-10 w-1/3 rounded-full  mx-auto  bg-white  ">
            Find</button>
          </div>
          </form>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-10" />

      <div>
      {searchType[0] === "offer" ? (
        <div>
          <div className="flex items-center ml-28 mt-10  mb-6 gap-2">
            <LiaCubeSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">
              Posts that
            </h2>
            <h2 className="text-pink-600 text-xl font-bold">
              {searchType[0]}
            </h2>
            <h2 className="text-white text-xl font-bold">
              {searchType[1]}
            </h2>
          </div>

          <div className="px-16"  >
          <CardOffer title={searchType[1]} />
          </div>

        </div>
      ) : searchType[0] === "need" ? (
        <div>
          <div className="flex items-center  ml-28 mt-10  mb-6 gap-2">
            <LiaCubeSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl font-bold">
              Posts that
            </h2>
            <h2 className="text-pink-600 text-xl font-bold">
              {searchType[0]}
            </h2>
            <h2 className="text-white text-xl font-bold">
              {searchType[1]}
            </h2>
          </div>

          <div className="px-16">
            <CardNeed title={searchType[1]} />
          </div>
        </div>
      ) : (
          <div className="flex h-[50vh] flex-col items-center justify-center" >
            <h1 className="text-orange-500 text-5xl mb-4 text-center  " >Explore job posts by skill!</h1>
            <h2 className="text-lg text-white mb-5">In this page you can try filter job posts by Need or Offer.</h2>
            <LiaCubeSolid size={"8em"} className="text-df4088" />
          </div>        
      )}
      </div>
      <hr className="my-4 border-t border-gray-300 mx-10" />
      
      <Sock  />




      {/* Footer */}
      </div>
    </div>
  );
};

export default Skills;
