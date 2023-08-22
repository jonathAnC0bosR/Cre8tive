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
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

import UploadPencil from "../../UI/uploadPencil"



import banner from "../../../assets/images/banner.jpg";

const EditProfile = () => {
  const authService = Auth;

  //url state variable
  const [URL, setURL] = useState(null);
  const [image, setImage] = useState(null);

  const updateStateURL = (val) => {
    setURL(val);
    setImage(val);
  };
console.log("URL: ", URL)

  const [updateProfile, { loading, error }] = useMutation(UPDATE_USER);

  const [formState, setFormState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    occupation: "",
    age: "",
    aboutMe: "",
    location: "",
    profileImage: URL,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfile = authService.getProfile().data;
    const { _id } = userProfile;
    const updatedData = {
      ...formState,
      id: _id,
    };
    console.log("useProfile:---- ", updatedData);
    try {
      const { data } = await updateProfile({
        variables: updatedData,
      });

      window.location.replace('/profile')
      console.log("Updated Profile");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="lg:h-16 h-10 md:h-16"></div> {/* Spacer */}
      <div className="flex flex-col justify-center grid-cols-2">
        <div class="editpro-banner">
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:text-sm text-white bg-zinc-950 min-h-screen w-screen"
        >
          <div className="h-30">
            <div className='flex items-center justify-center' >
              <div className='flex relative  ' >
                <div className="overflow-hidden rounded-full w-64 h-64">
                  <img
                    src={image}
                    alt="Here goes your Img, upload it!"
                    className="w-full h-full object-cover absolute "
                  />

                </div>

                <div className="absolute bottom-0 right-0  " >
                  <UploadPencil updateProp={updateStateURL} />
                </div>

              </div>
            </div>
          </div>
          <div className="w-48 mx-auto lg:mb-1">
            <label className="lg:ml-2 ">Username:</label>
            <input
              name="username"
              className="ml-2 bg-zinc-800 border-2 rounded-md border-pink-600 text-center "
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid lg:grid-cols-2 mx-10">
            <Input
              type="text"
              label="First name:"
              name="firstName"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              label="Last name:"
              name="lastName"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              label="Ocupation:"
              name="occupation"
              onChange={handleInputChange}
            />
            <Input
              type="number"
              label="Age: "
              onChange={handleInputChange}
              name="age"
            />
            <div className="col-span-2">
              <Input
                type="text"
                label="About me: "
                styles="h-36"
                name="aboutMe"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-2 flex flex-col mb-1 w-full lg:pr-7 md:pr-4 pr-2">
              <label>
                Location: <span className="text-[8px]">(optional)</span>
              </label>
              <select
                name="location"
                onChange={handleInputChange}
                className="w-full border-pink-600 border-2 bg-zinc-800 rounded-md"
              >
                <option value="Mexico">México</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
            <div className="col-span-2 flex flex-col mb-1 lg:pr-7 md:pr-4 pr-2">
              <label>Skills:</label>
              <select className="w-full border-pink-600 border-2 bg-zinc-800 rounded-md ">
                <option>Photography</option>
                <option>Ilustration</option>
                <option>UI/UX</option>
                <option>3D Design</option>
                <option>Graphic Design</option>
              </select>
              <div className="flex lg:flex-row flex-wrap justify-center  ">
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
                <ProfileIcon title="Graphic design">
                  <SiTaichigraphics size={"2em"} color="pink" />
                </ProfileIcon>
              </div>
            </div>
            <div className="w-full md:pr-4 pr-3 col-span-2 lg:col-span-2">
              <label>IG Portfolio: </label>
              <button className="bg-zinc-800 w-full flex items-center rounded-md border-pink-600 border-2 p-2 ">
                {" "}
                <AiOutlineInstagram color="pink" size={"2em"} />{" "}
                <p className="ml-2">Connect Instagram Account</p>
              </button>
            </div>
            <div className="lg:ml-4 md:pr-4 pr-3 col-span-2 lg:col-span-2" >
              <label>Social Media</label>
              <SocialMedia
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                title="Github"
              />

              <SocialMedia
                title="ArStation"
                src="https://img.icons8.com/color/48/artstation.png"
                styles="h-8"
              />
            </div>
          </div>
          <div className="flex  justify-center lg:pr-7 md:pr-4">
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
      </div>
    </>
  );
};

export default EditProfile;
