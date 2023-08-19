import profilePicEx from "../../../assets/images/placeholderProfile.jpg";
import pencil from "../../../assets/images/pencil.svg";
import { useState, useEffect } from 'react';
import axios from 'axios';


import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { UPDATE_PROFILEIMG} from '../../../utils/mutations'
import { PLEASE } from '../../../utils/queries'
import Auth from '../../../utils/auth'

const Profile = () => {
    const authService = Auth;
    const userId = '64df223f75e79433f71e8e2b';
    const user = authService.getProfile().data;
    const {_id} = user;
    console.log("id --------", _id);

    const [image, setImage] = useState(null);
    

    // function displayImg() {
        const { data } = useQuery( PLEASE, {
            variables: {"getProfileImgId": _id}
        });

    useEffect(()=>{
        if (data && data.getProfileImg) {
            const profileImgURL = data.getProfileImg.profileImage;
            console.log('Profile Image URL:', profileImgURL);
            // return profileImgURL;
            setImage(profileImgURL);
        }
    }, [data] )  
    // }
    
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
                const {idk} = add2Model({
                    variables: {
                        id: _id, 
                        profileImage: myUrl
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
        } catch (error) {
            console.log("Failed to upload: ",error);
        }
    }

    return (
    <div id="Portfolio div" className='pt-[70px] bg-gradient-to-r from-[#0C0F11] to-[#22282D]'>
        <div>
            <h1 className='text-white' >Profile</h1>
        </div>

        <div id="ProfileImg" >
            <div>
                <label htmlFor="imageInput" id="customButton"></label>
                <input type="file" id="imageInput" multiple={false} className="hidden" onChange={ uploadedImg }></input>
            </div>

            <div className='flex' >   
                         
                <div className="overflow-hidden rounded-full w-32 h-32">
                    <img
                    src={image}
                    alt="Circular Image"
                    className="w-full h-full object-cover"
                    />
                    
                </div>

                <label htmlFor="imageInput" className="relative cursor-pointer">
                    <div className="overflow-hidden rounded-full w-12 h-12 bg-orange-500 flex items-center justify-center absolute top-20">
                        
                            <img
                            src={pencil}
                            alt="Circular Image"
                            className="h-2/3 object-cover"
                            />
                        
                    </div>
                </label>
            </div>


        </div>  


        <br></br>
        <br></br>
        <br></br>
        
        
    </div>

        

        
    
    )
}

export default Profile;