import { useState } from "react";

import Input from "../../UI/Input";
import ProfileIcon from "../../UI/ProfileIcon";
import { AiOutlineCamera, AiOutlineInstagram } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBoxModel } from "react-icons/tb";
import { SiTaichigraphics } from "react-icons/si";
import SocialMedia from "../../UI/SocialMedia";
import AnimatedButton from "../../UI/AnimatedButton";

const EditProfile = () => {
  const [age, setAge] = useState("");
  const handleChange = (e) => {
    const value = e.target.value.replace(/D/g, " ");
    setAge(value);
  };

  return (
    <>
      <div className="lg:h-16 h-10 md:h-16"></div>
      <form className="lg:text-sm text-white bg-zinc-950 min-h-screen w-screen">
        <div className="bg-pink-600 h-30">
          <img
            src="https://img.icons8.com/doodle/96/user-male-circle.png"
            alt="user-male-circle"
            className="mx-auto lg:h-28  "
          />
        </div>
        <div className="w-48 mx-auto lg:mb-1">
          <label className="lg:ml-2 ">Username:</label>
          <input
            name="username"
            className="ml-2 bg-zinc-800 border-2 rounded-md border-pink-600 text-center "
          />
        </div>
        <div className="grid grid-cols-2 lg:grid lg:grid-cols-4 lg:ml-7 ">
          <Input type="text" label="First name:" />
          <Input type="text" label="Last name:" />
          <Input type="text" label="Ocupation:" />
          <Input
            type="number"
            label="Age: "
            value={age}
            onChange={handleChange}
          />
          <div className="col-span-2">
            <Input type="text" label="About me: " styles="h-36" />
          </div>
          <div className="col-span-2 flex flex-col mb-1 w-full lg:pr-7 ">
            <label>
              Location: <span className="text-[8px]">(optional)</span>
            </label>
            <select className="w-full border-pink-600 border-2 bg-zinc-800 rounded-md">
              <option>México</option>
              <option>USA</option>
              <option>Japan</option>
            </select>
          </div>
          <div className="col-span-2 flex flex-col mb-1 lg:pr-7">
            <label>Skills:</label>
            <select className="w-full border-pink-600 border-2 bg-zinc-800 rounded-md ">
              <option>Photography</option>
              <option>Ilustration</option>
              <option>UI/UX</option>
              <option>3D Design</option>
              <option>Graphic Design</option>
            </select>
            <div className="flex lg:flex-row lg:flex-wrap lg:justify-center">
              <ProfileIcon title="Photo">
                <AiOutlineCamera size={"2em"} color="pink" />
              </ProfileIcon>
              <ProfileIcon title="Ilustration">
                <BsPencil color="pink" size={"2em"} />
              </ProfileIcon>
              <ProfileIcon title="UI/UX">
                <MdOutlineDesignServices color="pink" size={"2em"} />
              </ProfileIcon>
              <ProfileIcon title="3D Design">
                <TbBoxModel color="pink" size={"2em"} />
              </ProfileIcon>
              <ProfileIcon title="Graphic design"><SiTaichigraphics  size={'2em'} color="pink"/></ProfileIcon>
            </div>
          </div>
          <div className="w-full">
            <label>IG Portfolio: </label>
            <button className="bg-zinc-800 flex items-center rounded-md border-pink-600 border-2 p-2">
              {" "}
              <AiOutlineInstagram color="pink" size={"2em"} />{" "}
              <p className="ml-2">Connect Instagram Account</p>
            </button>
          </div>
          <div>
            <label>Social Media</label>
            <SocialMedia
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
              title="Github"
            />
            <SocialMedia
              title="Stack Overflow"
              src="https://img.icons8.com/ios/50/000000/stackoverflow.png"
              styles="h-8"
            />
            <SocialMedia
              title="ArStation"
              src="https://img.icons8.com/color/48/artstation.png"
              styles="h-8"
            />
          </div>
        </div>
        <div className="flex justify-end lg:pr-7">
          <div className="mx-4">
            <AnimatedButton
              title="Cancel"
              styles="border-2 border-red-500 text-red-500 bg-zinc-900"
            />
          </div>
          <div>
            <AnimatedButton type="submit" title="Save" styles="bg-pink-500" />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
