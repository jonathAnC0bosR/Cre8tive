//this component uploads images to cloudinary
// this component has to be placed inside a div element with absolute and placed where you want. 
// it also receives an updateProp with a state variable function.
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILEIMG } from '../../utils/mutations'
import pencil from "../../assets/images/pencil.svg";
import React, { useRef, useState } from 'react'; 
import axios from 'axios';

export default function Upload(props){

    const [add2Model]= useMutation(UPDATE_PROFILEIMG);
    const inputFileRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const uploadImg = async (e) => {
        setLoading(true); 
        console.log("Uploading image! ... ")
        let upImg = e.target.files[0];
        const data = new FormData();
        data.set("image", upImg);
        let myUrl;
        try {
            const some = await axios.post("http://localhost:3001/api/upload", data);
            myUrl = some.data
            console.log("-----------response from Cloudinary:", myUrl);
            props.updateProp(myUrl);
            setLoading(false);
        } catch (error) {
            console.log("Failed to upload: ",error);
            setLoading(false);
        }
    }
    
    
    const handleLabelClick = () => {
        inputFileRef.current.click();
    };

    return (
        <div className="
            overflow-hidden rounded-full w-12 h-12 bg-orange-500 flex items-center justify-center">
            {loading ? 
                <div className='pl-2' >
                <svg aria-hidden="true" className="w-8 h-8 mr-2 animate-spin fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="pink"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                </div> 
                :
                <img
                src={pencil}
                alt="Circular Image"
                className="h-2/3 object-cover"
                onClick={handleLabelClick}
                />    
            }
            
            <input
                type="file"
                id="imageInput"
                accept="image/*"
                ref={inputFileRef}
                className="hidden" 
                onChange={uploadImg}
            />
        </div>    
    )

}

