import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';
import { PinterestEmbed } from 'react-social-media-embed';

import profilePicEx from "../../../assets/images/profilePicEx.jpg";
import pencil from "../../../assets/images/pencil.svg";
import { useState } from 'react';
import axios from 'axios';

const Profile = () => {

    // const [image, setimage] = useState(profilePicEx);

    const uploadedImg = async (e) => {
        let upImg = e.target.files[0];
        console.log(upImg)
        const data = new FormData();
        data.set("image", upImg);
        try {
            const some = await axios.post("http://localhost:3001/api/upload", data);
            console.log("-----------response from fetch:", some)
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
                <label for="imageInput" id="customButton"></label>
                <input type="file" id="imageInput" multiple={false} className="hidden" onChange={ uploadedImg }></input>
            </div>

            <div className='flex' >   
                         
                <div className="overflow-hidden rounded-full w-32 h-32">
                    <img
                    src={profilePicEx}
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