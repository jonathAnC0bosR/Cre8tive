import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';
import { PinterestEmbed } from 'react-social-media-embed';

import { BsGithub, BsLinkedin, BsFillCameraFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaExternalLinkAlt } from 'react-icons/fa';


import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PROFILEIMG } from '../../../utils/mutations'
import { GET_PROFILEIMG, GET_USER } from '../../../utils/queries'
import Auth from '../../../utils/auth'
import UploadPencil from "../../../components/UI/uploadPencil"

import { AiOutlineCamera } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBoxModel } from "react-icons/tb";
import { SiTaichigraphics } from "react-icons/si";


import artStation from "../../../assets/images/artstation.svg"
import topBanerImg from "../../../assets/images/topBanerProfile.png"
import topBanerImg2 from "../../../assets/images/colorPiece6.jpg"
import EditProfile from './EditProfile';



// const goToEditProfile = () => {
// }






const Profile = () => {

    // code to edit profile
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
    const openEditProfileModal = () => {
        setIsEditProfileModalOpen(true);
    };
    const closeEditProfileModal = () => {
        setIsEditProfileModalOpen(false);
    };

    //---------------------------------------
    //--- getting logged user ID
    const authService = Auth;
    const user = authService.getProfile().data;
    const { _id, username } = user;
    console.log("--", username)

    //url state variable
    const [URL, setURL] = useState(null);
    const [image, setImage] = useState(null);

    const updateStateURL = (val) => {
        setURL(val);
    };

    // const [responseQuery, setresponseQuery] = useState('');
    // displayImg
    const { loading, data } = useQuery(GET_PROFILEIMG, {
        variables: { "getProfileImgId": _id }
    });
    const userData = data?.getProfileImg || []; // if data exists, store in userData, otherwise undefined
    console.log("data from query: ", loading, userData)
    console.log(userData.aboutMe)

    useEffect(() => {
        if (!loading && data && data.getProfileImg) {
            const profileImgURL = data.getProfileImg.profileImage;
            setImage(profileImgURL);
        }
    }, [loading, data]);

    // useEffect(()=>{
    //     if (data && data.getProfileImg) {
    //         const profileImgURL = data.getProfileImg.profileImage;
    //         const aboutMe = data.getProfileImg.aboutMe;
    //         const github = data.getProfileImg.github;
    //         const location = data.getProfileImg.location;
    //         const occupation = data.getProfileImg.occupation;
    //         const rating = data.getProfileImg.rating;
    //         // console.log('Profile Image URL:', profileImgURL);
    //         setImage(profileImgURL);
    //     }
    // }, [data] )  

    const [add2Model, { error }] = useMutation(UPDATE_PROFILEIMG);

    useEffect(() => {
        if (URL != null) {
            try {
                const { idk } = add2Model({
                    variables: {
                        id: _id,
                        profileImage: URL
                    }
                }).then((idk) => {
                    console.log('--------added img URL to DB')
                    const urlyes = idk.data.updateProfileImg.profileImage;
                    setImage(urlyes)
                }
                )
            } catch (error) {
                console.log("Failed to add to DB: ", error);
            }

        }

    }, [URL]);

    const navigate = useNavigate();
    const handleEditProfile = async () => {
        try {
            navigate('/editProfile')
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <>
            <div className="lg:h-16 h-10 md:h-16 bg-gradient-to-r from-[#0C0F11] to-[#22282D]"></div> {/* Spacer */}

            <div id="profile div" className='lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex items-center justify-center  '>
                <div className='topBaner fixed align-top top-0 min-w-full min-h-10 h-36'>
                    <img src={topBanerImg2}></img>
                </div>
                <div className='mainContainer xl:w-1/3 lg:w-1/2 md:w-1/2 w-5/6 mt-24' >

                    <div className='profileContainer flex items-center justify-center '>
                        {/* -------------------------profile image and icon */}
                        <div className='flex items-center justify-center' >
                            <div className='flex relative  ' >
                                <div className="overflow-hidden rounded-full xl:w-64 xl:h-64 lg:w-48 lg:h-48">
                                    <img
                                        src={image}
                                        alt="Circular Image"
                                        className="w-full h-full object-cover"
                                    />

                                </div>
                                <div className='absolute bottom-1 left-0'>
                                    <button onClick={handleEditProfile} className='bg-pink8 text-white font-bold rounded-full p-2' >Edit Profile
                                    </button>
                                </div>
                                <div className="absolute bottom-0 right-0  " >
                                    <UploadPencil updateProp={updateStateURL} />
                                </div>

                            </div>
                        </div>


                        <div className='profileInfo flex flex-col items-center justify-center mt-6'>
                            <h3 className="text-5xl font-extrabold"> {userData.username} </h3>
                            <p className='mt-2 mb-6 text-pink8 font-bold'> {userData.occupation} </p>

                            {/* <a onClick={openEditProfileModal}> Edit profile</a> */}


                            <div className="profileInfo flex flex-col items-center justify-center my-5" >
                                <h3 className="text-white text-xl my-4 font-extrabold"> About me</h3>
                                <p className="font-thin text-center"> {userData.aboutMe} </p>
                            </div>

                            <div className='flex items-center justify-center m-5 w-1/2 p-4
                         grid-cols-4 gap-4 '>
                                <div className='flex flex-row row-auto justify-between' >
                                    <a href="mailto:your.email@example.com" className='flex-end' >
                                        <HiOutlineMail size={"3em"} />
                                    </a>
                                    <a>
                                        <img src={artStation} className='w-10 mx-4' ></img>
                                    </a>
                                    <button>
                                        <BsGithub size={"2em"} color='white' />
                                    </button>
                                </div>




                            </div>
                        </div>

                        <div className="flex flex-col items-center w-1/2 rounded-xl p-4 mb-6">

                            <h3 className="text-white text-xl my-4 font-extrabold" >Skills</h3>
                            <div className='flex items-center justify-center'>

                                <div className='bulletSkill'>
                                    <MdOutlineDesignServices/>
                                    <p>Skill One</p>
                                </div>
                                <div className='bulletSkill'>
                                    <iOutlineCamera />
                                    <p>Skill One</p>
                                </div>
                                <div className='bulletSkill'>
                                    <BsPencil />
                                    <p>Skill two</p>
                                </div>
                                <div className='bulletSkill'>
                                    <SiTaichigraphics />
                                    <p>Skill two</p>
                                </div>
                            </div>

                        </div>

                        <div className='portfolioContainer items-center flex flex-col justify-center grid-cols-4 mt-6'>
                            <h3 className="text-white text-xl my-4 font-extrabold"> Portfolio</h3>
                            <div className='firtsRowMedia col-span-4' style={{ display: 'flex', justifyContent: 'center' }}>
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/374995106486676585/"
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/374995106486676581/"
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/374995106486676570/"
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/374995106486676558/"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className='secondsRowMedia col-span-4' style={{ display: 'flex', justifyContent: 'center' }}>
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/374995106486676547/"
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/374995106486676535/"
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/68609594315630760/"
                                    width={200}
                                    height={200}
                                />
                                <PinterestEmbed url="https://www.pinterest.com.mx/pin/374995106486676552/"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                        {/* <Posts/> To be added*/}

                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                {isEditProfileModalOpen && (
                    <EditProfile onClose={closeEditProfileModal} />
                )}
            </div>
        </>
    )

}

export default Profile;
