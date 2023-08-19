import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';
import { PinterestEmbed } from 'react-social-media-embed';
import React, { useState } from 'react';

import profilePicEx from "../../../assets/images/profilePicEx.jpg";
import pencil from "../../../assets/images/pencil.svg";
import axios from 'axios';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILEIMG} from '../../../utils/mutations'

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillCameraFill } from "react-icons/bs";

import topBanerImg from "../../../assets/images/topBanerProfile.png"
import profilePic from "../../../assets/images/user.webp"
import EditProfile from './EditProfile';
//import Posts from '../Posts/Posts';



const goToEditProfile = () => {


}
const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };
  
  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };



const Profile = () => {

    // code to edit profile
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);


    
    // const [image, setimage] = useState(profilePicEx);
    const [add2Model, {error}]= useMutation(UPDATE_PROFILEIMG);

    const uploadedImg = async (e) => {
        let upImg = e.target.files[0];
        const data = new FormData();
        data.set("image", upImg);
        let myUrl;
        try {
            const some = await axios.post("http://localhost:3001/api/upload", data);
            myUrl = some.data
            console.log("-----------response from fetch:", myUrl);
            try {
                const {idk} = await add2Model({
                    variables: {
                        id: '64df223f75e79433f71e8e2c', 
                        profileImage: myUrl
                    }
                });
                console.log('--------added img URL to DB')
            } catch (error) {
                console.log("Failed to add to DB: ",error);
            }
        } catch (error) {
            console.log("Failed to upload: ",error);
        }
        
    }

    return (
        <div id="profile div" className=' bg-gradient-to-r from-[#0C0F11] to-[#22282D]'>
            <div className='mainContainer' >
                <div className='topBaner'>
                    <img src={topBanerImg}></img>
                </div>
                <div className='profileContainer'>
                    <div className="avatarImage overflow-hidden rounded-full w-32 h-32">
                        <img
                            src={profilePic}
                            alt="Circular Image"
                            className="w-full h-full object-cover" />
                    </div>
                    <label htmlFor="imageInput" className="relative cursor-pointer">
                        <div className="pencilButton overflow-hidden rounded-full w-12 h-12 bg-orange-500 flex items-center justify-center absolute top-20">
                            <img
                                src={pencil}
                                alt="Circular Image"
                                className="h-2/3 object-cover" />
                        </div>
                    </label>
                    <div className='profileInfo'>
                        <h1> User Name</h1>
                        <a onClick={openEditProfileModal}> Edit profile</a>
                        <br /><br />
                        <h2> About me</h2>
                        <p> Short description about shgfedrftguhgtfresdrftgytgrfeomething somenthing</p>
                    </div>
                    <div className='socialButtons'>
                        <button> 
                            <BsGithub size={"2em"} color='white'/>
                        </button>
                        <button> 
                            <BsLinkedin size={"2em"} color='white'/>
                        </button>
                    </div>
                    <div class="skillsContainer">
                      <h3>Skills</h3>
                      <div className='skillsTags'>
                        <div className='bulletSkill'>
                            <BsFillCameraFill/>
                            <p>Skill One</p>
                        </div>
                        <div className='bulletSkill'>
                            <BsFillCameraFill/>
                            <p>Skill One</p>
                        </div>                        <div className='bulletSkill'>
                            <BsFillCameraFill/>
                            <p>Skill two</p>
                        </div>                        <div className='bulletSkill'>
                            <BsFillCameraFill/>
                            <p>Skill two</p>
                        </div>
                      </div>
                        <div className='portfolioContainer'>
                            <h3>Portfolio</h3>
                            <div className='firtsRowMedia' style={{ display: 'flex', justifyContent: 'center' }}>
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/9570217950888311/" 
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/670895675752727009/" 
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/612067405622271768/" 
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/654007177161332170/" 
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className='secondsRowMedia' style={{ display: 'flex', justifyContent: 'center' }}>
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/55732114131342304/" 
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/55732114131342304/" 
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/55732114131342304/" 
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/55732114131342304/" 
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                        {/* <Posts/> To be added*/}
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            {isEditProfileModalOpen && (
                <EditProfile onClose={closeEditProfileModal} />
    )}
        </div>
    )
}

export default Profile;