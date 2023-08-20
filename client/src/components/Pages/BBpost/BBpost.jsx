import backImg from "../../../assets/images/example-img.png";
import { BiEditAlt } from "react-icons/bi";
import { RiUserReceivedFill } from "react-icons/ri";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BiSolidTimer } from "react-icons/bi";

import AnimatedButton from "../../UI/AnimatedButton";
import ServicesButton from "../UserServices/servicesModal";
import FormElement from "../UserServices/servicesModal2";

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";


const BBpost = () => {
  return (
    // main div
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col justify-center w-screen">
      <div className="bg-gradient-to-r from-[#353434] to-[#424141] text-white rounded-bl-lg rounded-br-lg flex-grow place-self-center mx-4 xl:w-1/3 lg:w-1/2 md:w-1/2 w-5/6">
        <img src={backImg} className="w-full h-96" alt="Background Image"></img>
        <div className="flex flex-row justify-between px-10 py-8">
          <h1 className="text-3xl">Post Title </h1>
          <BiEditAlt size={"2em"} color="pink" />
        </div>
        <p className="pr-10 pl-10 pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          dapibus eleifend facilisis. Nulla facilisi. Vivamus varius, turpis a
          eleifend imperdiet, leo sapien sagittis lorem, et rutrum lorem massa
          sed tellus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nullam aliquam lobortis nunc
          luctus leo. Donec in laoreet neque. Maecenas id mattis arcu.
        </p>
      </div>

      <div className="flex flex-col my-10 bg-gradient-to-r from-[#353434] to-[#424141] place-self-center p-8 rounded-lg mx-4 xl:w-1/3 lg:w-1/2 md:w-1/2 w-5/6">
        <div className="flex justify-between items-center mb-4">
          <RiUserReceivedFill size={"2.8em"} color="pink" />
          <h2 className="text-white">Service Offered</h2>
          <button className="bg-pink-500 text-white px-4 py-3 rounded-3xl">
            Negotiate
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <BsFillSendCheckFill size={"2.5em"} color="pink" />
          <h2 className="text-white">Service In Need</h2>
          <button className="bg-pink-400 text-white px-4 py-3 rounded-3xl">
            Negotiate
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <BiSolidTimer size={"3em"} color="pink" />
          <h2 className="text-white">Delivery Time</h2>
          <ServicesButton/>
        </div>
        <AnimatedButton styles='bg-pink-600' title="Post" />
      </div>

      {/* Footer */}
    </div>
  );
};

export default BBpost;
