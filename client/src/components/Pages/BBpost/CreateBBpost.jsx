import icon1 from "../../../assets/images/icon1.svg";
import icon2 from "../../../assets/images/icon2.svg";
import icon3 from "../../../assets/images/icon3.svg";
import exImg from "../../../assets/images/example-img.png";
import React, { useState, useEffect } from "react";
import UploadPencil from "../../UI/uploadPencil";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_BBPOST } from "../../../utils/mutations";
import { GET_SKILLS, GET_SKILLS_BY_USER } from "../../../utils/queries";
import Auth from "../../../utils/auth";
import "../../../index.css";

import { AiOutlineCamera } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBoxModel } from "react-icons/tb";
import { SiTaichigraphics } from "react-icons/si";

import { Button } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import AnimatedButtonBB from "../../UI/AnimatedButtonBB";

const CreateBBpost = () => {
  //--- getting logged user ID
  const authService = Auth;
  const user = authService.getProfile().data;
  const { _id } = user;

  //url state variable
  const [URL, setURL] = useState(null);
  const updateStateURL = (val) => {
    setURL(val);
  };

  //--- getting skills from DB

  //--- getting skills from DB

  const [number, setNumber] = useState(null);
  const [timeUnit, setTimeUnit] = useState(null);

  const [selectedSkillNeededID, setSelectedSkillNeededID] = useState(null);
  const [selectedSkillOfferedID, setSelectedSkillOfferedID] = useState(null);
  // Fetch the data from your database using GET_SKILLS query
  const { loading, data } = useQuery(GET_SKILLS);
  // render a text if the data is loading
  // if (loading) return <p>Loading...</p>;
  // make and empty array if skills is empty
  const skills = data ? data.skills : [];

  // console.log(skills);

  // console.log(skills);

  const handleSkillNeededSelect = (skillID) => {
    setSelectedSkillNeededID(skillID);
    console.log("Needed skillID: ", skillID);
  };

  const handleSkillOfferedSelect = (skillID) => {
    setSelectedSkillOfferedID(skillID);
    console.log("Offered skillID: ", skillID);
  };

  const getIconForSkill = (skillTitle) => {
    switch (skillTitle) {
      case "UI/UX":
        return <MdOutlineDesignServices size={"1em"} color="pink" />;
      case "Illustration":
        return <BsPencil size={"1em"} color="pink" />;
      case "Photo":
        return <AiOutlineCamera size={"1em"} color="pink" />;
      case "3D Design":
        return <TbBoxModel size={"1em"} color="pink" />;
      case "Graphic Design":
        return <SiTaichigraphics size={"1em"} color="pink" />;
      default:
        return null; // or a default icon
    }
  };

  const [createBBPost] = useMutation(ADD_BBPOST);

  const photoID = "64e33b55d12c902c6f81eacd";

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log("submit.........", e);
    // console.log(URL);
    const title = e.target[0].value;
    const text = e.target[1].value;
    const deliveryTime = `${number}${timeUnit}`;

    const created = new Date().toISOString();
    try {
      const { newPost } = createBBPost({
        variables: {
          bulletPostTitle: title,
          bulletText: text,
          userId: _id,
          createdAt: created,
          imageUrl: URL,
          deliveryTime: deliveryTime,
          serviceNeed: selectedSkillNeededID,
          serviceOffer: selectedSkillOfferedID,
        },
      }).then((newPost) => {
        console.log("--------added new post to DB");
      });
    } catch (error) {
      console.log("---Failed to add to DB: ", error);
    }
  };

  return (
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex items-center justify-center ">
      <div className="bg-zinc-950 shadow-xl shadow-stone-950 xl:w-1/3 lg:w-1/2 md:w-1/2 w-5/6 p-6 mb-20 sm:mt-40 lg:mt-20  rounded-lg z-[1]">
        <div className="text-center m-4 text-xl">
          <h1 className="text-white">Create Post</h1>
        </div>

        <form className="flex flex-col" onSubmit={handleCreate}>
          <input
            type="text"
            className="rounded-lg bg-[#353535] h-8 w-2/3 m-4 p-2 text-white"
            placeholder=" Give your post a title!"
          ></input>
          <textarea
            className="rounded-lg bg-[#353535] ml-4 mb-5 p-3 h-36 text-white"
            placeholder="Tell us about the job..."
          ></textarea>

          <div>
            {/* border-2 border-pink-600 */}
            <div
              className="bg-[#353535] rounded-lg
           grid-cols-6 flex items-center p-2 m-3 "
            >
              {/* <div className="col-span-1" >
                      <img src={icon3} className="" />
                  </div> */}
              <div className="flex w-full justify-between align-middle text-center px-4 col-span-3">
                <h2 className="flex text-white font-bold md:text-base text-sm  my-2 col-span-2">
                  Service in Need
                </h2>
                <Button.Group className="flex justify-center items-center bg-353434 min-w-fit col-span-4">
                  {skills.map((skill) => (
                    <Button
                      key={skill._id}
                      color="pink"
                      onClick={() => handleSkillNeededSelect(skill._id)}
                      title={skill.skillTitle}
                      className={
                        selectedSkillNeededID === skill._id
                          ? "bg-pink-important"
                          : "bg-gray-important"
                      }
                    >
                      {getIconForSkill(skill.skillTitle)}
                      {/* <p>{skill.skillTitle}</p> */}
                    </Button>
                  ))}
                </Button.Group>
              </div>
            </div>
            <div
              className="bg-[#353535]    rounded-lg
               grid-cols-2 flex items-center p-2 m-3 "
            >
              {/* <div className="col-span-1" >
                      <img src={icon2} className="" />
                  </div> */}
              <div className="flex w-full justify-between align-middle text-center px-4 col-span-3">
                <h2 className="text-white font-bold md:text-base text-sm my-2 ">
                  Service Offered
                </h2>
                <Button.Group className="flex justify-center items-center bg-353434 min-w-fit">
                  {skills.map((skill) => (
                    <Button
                      key={skill._id}
                      color="pink"
                      onClick={() => handleSkillOfferedSelect(skill._id)}
                      title={skill.skillTitle}
                      className={
                        selectedSkillOfferedID === skill._id
                          ? "bg-pink-important"
                          : "bg-gray-important"
                      }
                    >
                      {getIconForSkill(skill.skillTitle)}
                      {/* <p>{skill.skillTitle}</p> */}
                    </Button>
                  ))}
                </Button.Group>
              </div>
            </div>
            <div
              className="bg-[#353535]    rounded-lg
               grid-cols-2 flex items-center p-2 m-3 "
            >
              {/* <div className="col-span-1" >
                      <img src={icon1} className="" />
                  </div> */}
              <div className="col-span-3  text-center">
                <h2 className="text-white font-bold md:text-base text-sm w-auto">
                  Delivery Time
                </h2>
              </div>
              <div className="flex w-full justify-end align-middle text-center px-4 col-span-3">
                <input
                  type="number"
                  className="w-20 rounded-lg bg-[#353535] text-white my-2 mx-2 h-full"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="#"
                />

                <Button.Group className="flex justify-center items-center bg-353434 min-w-fit text-sm">
                  <Button
                    color="pink"
                    onClick={() => setTimeUnit("d")}
                    className={
                      timeUnit === "d"
                        ? "bg-pink-important text-xs"
                        : "bg-gray-important text-xs text-white"
                    }
                  >
                    Days
                  </Button>
                  <Button
                    color="pink"
                    onClick={() => setTimeUnit("w")}
                    className={
                      timeUnit === "w"
                        ? "bg-pink-important text-xs"
                        : "bg-gray-important text-xs text-white"
                    }
                  >
                    Weeks
                  </Button>
                  <Button
                    color="pink"
                    onClick={() => setTimeUnit("m")}
                    className={
                      timeUnit === "m"
                        ? "bg-pink-important text-xs"
                        : "bg-gray-important text-xs text-white"
                    }
                  >
                    Months
                  </Button>
                </Button.Group>
              </div>
            </div>
          </div>

          <div className="flex  relative  items-center justify-center m-4 p-2">
            <div className="">
              <img
                src={URL ? URL : exImg}
                className="w-full h-full  rounded-xl hover:opacity-70"
              />
            </div>

            <div className="absolute top-10 center">
              <UploadPencil updateProp={updateStateURL} />
            </div>
          </div>

          <AnimatedButtonBB title="Create Post!" />
        </form>
      </div>
    </div>
  );
};

export default CreateBBpost;
