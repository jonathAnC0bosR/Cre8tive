import SearchBar from "../../UI/SkillsSearchBar";
import { BsFire } from "react-icons/bs";
import { LiaCameraSolid } from "react-icons/lia";
import { LiaPencilAltSolid } from "react-icons/lia";
import { LiaCubeSolid } from "react-icons/lia";
import { LiaCodeSolid } from "react-icons/lia";
import { LiaEdit } from "react-icons/lia";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Skills/skillStyles.css";

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
          <div className="flex items-center mb-4 gap-2">
            <LiaCameraSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl text-df4088 font-bold">
              Photography
            </h2>
          </div>
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex gap-5 pb-5">
              {/* Card */}
              <div className="relative rounded-lg w-72 overflow-hidden">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                {/* Content */}
                <div className="relative">
                  <h3 className="text-white text-lg font-bold bg-df4088 p-3 pl-10 rounded-t-lg">
                    Portraits 4 Grad
                  </h3>
                  <div className="mx-4">
                    <div className="flex flex-row text-white">
                      <img
                        width="60"
                        height="60"
                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                        alt="facebook"
                        className="mt-4 m-5"
                      />
                      <div className="flex-column pt-4 pb-5 pr-5">
                        <p className="text-shadow">CDMX </p>
                        <p className="text-lg font-bold text-shadow">
                          User123123
                        </p>
                        <p className="text-shadow">RATING </p>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Offers...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCameraSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaPencilAltSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCubeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Needs...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCodeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {/* Align the last button to the right */}
                      <button className="bg-df4088 text-white text-lg font-bold px-7 py-2 m-4 rounded-3xl transition-all duration-300 transform hover:scale-110">
                        More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            <LiaPencilAltSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl text-df4088 font-bold">
              Illustration
            </h2>
          </div>
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex gap-5 pb-5">
              {/* Card */}
              <div className="relative rounded-lg w-72 overflow-hidden">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo-Illustration.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                {/* Content */}
                <div className="relative">
                  <h3 className="text-white text-lg font-bold bg-df4088 p-3 pl-10 rounded-t-lg">
                    Need cover art
                  </h3>
                  <div className="mx-4">
                    <div className="flex flex-row text-white">
                      <img
                        width="60"
                        height="60"
                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                        alt="facebook"
                        className="mt-4 m-5"
                      />
                      <div className="flex-column pt-4 pb-5 pr-5">
                        <p className="text-shadow">CDMX </p>
                        <p className="text-lg font-bold text-shadow">
                          User123123
                        </p>
                        <p className="text-shadow">RATING </p>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Offers...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCameraSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaPencilAltSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCubeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Needs...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCodeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {/* Align the last button to the right */}
                      <button className="bg-df4088 text-white text-lg font-bold px-7 py-2 m-4 rounded-3xl transition-all duration-300 transform hover:scale-110">
                        More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Design */}
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            <LiaCubeSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl text-df4088 font-bold">
              3D Design
            </h2>
          </div>
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex gap-5 pb-5">
              {/* Card */}
              <div className="relative rounded-lg w-72 overflow-hidden">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo-3D.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                {/* Content */}
                <div className="relative">
                  <h3 className="text-white text-lg font-bold bg-df4088 p-3 pl-10 rounded-t-lg">
                    Need cover art
                  </h3>
                  <div className="mx-4">
                    <div className="flex flex-row text-white">
                      <img
                        width="60"
                        height="60"
                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                        alt="facebook"
                        className="mt-4 m-5"
                      />
                      <div className="flex-column pt-4 pb-5 pr-5">
                        <p className="text-shadow">CDMX </p>
                        <p className="text-lg font-bold text-shadow">
                          User123123
                        </p>
                        <p className="text-shadow">RATING </p>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Offers...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCameraSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaPencilAltSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCubeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Needs...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCodeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {/* Align the last button to the right */}
                      <button className="bg-df4088 text-white text-lg font-bold px-7 py-2 m-4 rounded-3xl transition-all duration-300 transform hover:scale-110">
                        More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UI/UX */}
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            <LiaCodeSolid size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl text-df4088 font-bold">UI/UX</h2>
          </div>
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex gap-5 pb-5">
              {/* Card */}
              <div className="relative rounded-lg w-72 overflow-hidden">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo-UIUX.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                {/* Content */}
                <div className="relative">
                  <h3 className="text-white text-lg font-bold bg-df4088 p-3 pl-10 rounded-t-lg">
                    Need cover art
                  </h3>
                  <div className="mx-4">
                    <div className="flex flex-row text-white">
                      <img
                        width="60"
                        height="60"
                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                        alt="facebook"
                        className="mt-4 m-5"
                      />
                      <div className="flex-column pt-4 pb-5 pr-5">
                        <p className="text-shadow">CDMX </p>
                        <p className="text-lg font-bold text-shadow">
                          User123123
                        </p>
                        <p className="text-shadow">RATING </p>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Offers...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCameraSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaPencilAltSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCubeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Needs...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCodeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {/* Align the last button to the right */}
                      <button className="bg-df4088 text-white text-lg font-bold px-7 py-2 m-4 rounded-3xl transition-all duration-300 transform hover:scale-110">
                        More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            <LiaEdit size={"3em"} className="text-df4088" />
            <h2 className="text-white text-xl text-df4088 font-bold">
              Graphic Design
            </h2>
          </div>
          <div className="flex overflow-x-scroll custom-scrollbar">
            <div className="flex gap-5 pb-5">
              {/* Card */}
              <div className="relative rounded-lg w-72 overflow-hidden">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo-GDesign.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                {/* Content */}
                <div className="relative">
                  <h3 className="text-white text-lg font-bold bg-df4088 p-3 pl-10 rounded-t-lg">
                    Need cover art
                  </h3>
                  <div className="mx-4">
                    <div className="flex flex-row text-white">
                      <img
                        width="60"
                        height="60"
                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                        alt="facebook"
                        className="mt-4 m-5"
                      />
                      <div className="flex-column pt-4 pb-5 pr-5">
                        <p className="text-shadow">CDMX </p>
                        <p className="text-lg font-bold text-shadow">
                          User123123
                        </p>
                        <p className="text-shadow">RATING </p>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Offers...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCameraSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaPencilAltSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCubeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="text-shadow mx-5 my-1 align-center w-100">
                      <h3 className="text-white text-base my-2 text-shadow">
                        Needs...
                      </h3>
                      <div className="flex flex-row justify-between">
                        <button className="bg-353434 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110">
                          <LiaCodeSolid
                            size={"2.3em"}
                            className="text-df4088"
                          />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {/* Align the last button to the right */}
                      <button className="bg-df4088 text-white text-lg font-bold px-7 py-2 m-4 rounded-3xl transition-all duration-300 transform hover:scale-110">
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

      {/* Footer */}
    </div>
  );
};

export default Skills;
