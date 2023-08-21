import profilePicEx from "../../../assets/images/placeholderProfile.jpg";
import pencil from "../../../assets/images/pencil.svg";
import { useState, useEffect } from 'react';
import axios from 'axios';



import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PROFILEIMG } from '../../../utils/mutations'

import { PLEASE } from '../../../utils/queries'
import Auth from '../../../utils/auth'
import UploadPencil from "../../../components/UI/uploadPencil"


const Profile = () => {

    //--- getting logged user ID
    const authService = Auth;
    const user = authService.getProfile().data;
    const {_id} = user;

    //url state variable
    const [URL, setURL]= useState(null);
    const updateStateURL = (val) => {
        setURL(val);
    };

    const [image, setImage] = useState(null);
    

    // function displayImg() {
        const { data } = useQuery( PLEASE, {
            variables: {"getProfileImgId": _id}
        });

    useEffect(()=>{
        if (data && data.getProfileImg) {
            const profileImgURL = data.getProfileImg.profileImage;
            console.log('Profile Image URL:', profileImgURL);
            setImage(profileImgURL);
        }
    }, [data] )  
    // }
    
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

    return (
    <div id="Portfolio div" className='pt-[70px] bg-gradient-to-r from-[#0C0F11] to-[#22282D]'>

        <div>
            <h1 className='text-white' >Profile</h1>
        </div>


        <div id="ProfileImg" >

            <div className='flex relative ' >   
                         
                <div className="overflow-hidden rounded-full w-32 h-32">
                    <img
                    src={image}
                    alt="Circular Image"
                    className="w-full h-full object-cover"
                    />
                    
                </div>

                <div className="absolute top-0 " >
                    <UploadPencil updateProp={updateStateURL} />
                </div>

            </div>


        </div>  
       
    </div>
    )
}

export default Profile;