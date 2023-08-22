import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';
import { PinterestEmbed } from 'react-social-media-embed';

import { BsGithub,BsLinkedin,BsFillCameraFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaExternalLinkAlt } from 'react-icons/fa';


import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PROFILEIMG} from '../../../utils/mutations'
import { GET_PROFILEIMG, GET_USER } from '../../../utils/queries'
import Auth from '../../../utils/auth'
import UploadPencil from "../../../components/UI/uploadPencil"

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
    const {_id, username} = user;

    //url state variable
    const [URL, setURL]= useState(null);
    const [image, setImage] = useState(null);

    const updateStateURL = (val) => {
        setURL(val);
    };

    // const [responseQuery, setresponseQuery] = useState('');
    // displayImg
        const { loading, data } = useQuery( GET_PROFILEIMG, {
            variables: {"getProfileImgId": _id}
        });
        const userData = data?.getProfileImg || []; // if data exists, store in userData, otherwise undefined
        console.log("data from query: ", loading , userData)
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
    
    const [add2Model, {error}]= useMutation(UPDATE_PROFILEIMG);

    useEffect(()=>{
        if (URL!=null) {
            try {
                const {idk} = add2Model({
                    variables: {
                        id: _id, 
                        profileImage: URL
                    }
                }). then((idk) => {
                    console.log('--------added img URL to DB')
                    const urlyes = idk.data.updateProfileImg.profileImage;
                    setImage(urlyes)
                    }
                )
            } catch (error) {
                console.log("Failed to add to DB: ",error);
            }

        }

    }, [URL]);

    const navigate = useNavigate();
    const handleEditProfile = async () =>{
        try {
            navigate('/editProfile')
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div id="profile div" className='pt-[70px] bg-gradient-to-r from-[#0C0F11] to-[#22282D]'>
            <div className='mainContainer' >
                <div className='topBaner'>
                    <img src={topBanerImg2}></img>
                </div>
                <div className='profileContainer flex items-center justify-center '>
                    {/* -------------------------profile image and icon */}
                    <div className='flex items-center justify-center' >
                        <div className='flex relative  ' >
                            <div className="overflow-hidden rounded-full w-32 h-32">
                                <img
                                src={image}
                                alt="Circular Image"
                                className="w-full h-full object-cover"
                                />
                                
                            </div>

                            <div className="absolute top-0 right-0  " >
                                <UploadPencil updateProp={updateStateURL} />
                            </div>

                        </div>
                    </div>

                    <div className='profileInfo flex flex-col items-center justify-center my-5'>
                        <h1  > {username} </h1>
                        <p className='mb-7 text-orange-500 font-bold'> {userData.occupation} </p>
                        <button onClick={handleEditProfile} className='bg-white text-orange-500 font-bold rounded-full py-1 px-2 text-sm' >Edit Profile </button>
                        {/* <a onClick={openEditProfileModal}> Edit profile</a> */}

                    
                        <div className="profileInfo flex flex-col items-center justify-center my-5" >
                            <h2 > About me</h2>
                            <p> {userData.aboutMe} </p>
                        </div>

                        <div className='flex items-center justify-center m-5 w-1/2 p-4
                        grid grid-cols-4 gap-4 '>
                            <div className='flex items-center justify-center' >
                            <a href="mailto:your.email@example.com" className='flex-end' >
                                <HiOutlineMail size={"2em"} />
                            </a>
                            </div>
                            {/* <div className="col-span-3" >
                                    <a>
                                        <img src={artStation} className='w-10' ></img>
                                    </a>
                                    <button> 
                                        <BsGithub size={"2em"} color='white'/>
                                    </button>
                            </div> */}
                            {userData.artStation && userData.github ? 
                                <div className="col-span-3" >
                                    <a>
                                        <img src={artStation} className='w-10' ></img>
                                    </a>
                                    <button> 
                                        <BsGithub size={"2em"} color='white'/>
                                    </button>
                                </div>
                            : 
                                <div className="col-span-3" >
                                <a>
                                    <img src={artStation} className='w-10' ></img>
                                </a>
                                <button> 
                                    <BsGithub size={"2em"} color='white'/>
                                </button>
                                </div>
                            }
                            
                            
                        </div>
                    </div>

                    <div className="flex flex-col items-center bg-slate-800 w-1/2 rounded-xl p-4">

                        <h3 className="text-white text-xl" >Skills</h3>
                        <div className='flex items-center justify-center'>

                            <div className='bulletSkill'>
                                <BsFillCameraFill/>
                                <p>Skill One</p>
                            </div>
                            <div className='bulletSkill'>
                                <BsFillCameraFill/>
                                <p>Skill One</p>
                            </div>                        
                            <div className='bulletSkill'>
                                <BsFillCameraFill/>
                                <p>Skill two</p>
                            </div>                        
                            <div className='bulletSkill'>
                                <BsFillCameraFill/>
                                <p>Skill two</p>
                            </div>
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
