import backImg from "../../../assets/images/example-img.png";
import { BiEditAlt } from "react-icons/bi";
import { RiUserReceivedFill } from "react-icons/ri";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BiSolidTimer } from "react-icons/bi";

const BBpost = () => {
  return (
    // main div
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex flex-col">
      <div className="bg-gradient-to-r from-[#353434] to-[#424141] text-white rounded-bl-lg rounded-br-lg flex-grow mx-4 sm:m-4 md:m-12">
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
      <div className="flex flex-col my-10 bg-gradient-to-r from-[#353434] to-[#424141] p-8 rounded-lg mx-4 sm:m-4 md:m-12">
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
          <button className="bg-pink-300 text-white px-4 py-3 rounded-3xl">
            Negotiate
          </button>
        </div>
        <button className="bg-pink-500 text-white px-4 py-3 mt-2 rounded-3xl w-32 mx-auto">
          Accept
        </button>
      </div>

      {/* Footer */}
    </div>
  );
};

export default BBpost;
