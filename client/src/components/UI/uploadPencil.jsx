//this component uploads images to cloudinary
// this component has to be placed inside a div element with absolute and placed where you want. 
// it also receives an updateProp with a state variable function.
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILEIMG } from '../../utils/mutations'
import pencil from "../../assets/images/pencil.svg";
import React, { useRef } from 'react'; 


import axios from 'axios';

export default function Upload(props){
    // console.log("UploadFunction, Props---------------",props)

    const [add2Model, {error}]= useMutation(UPDATE_PROFILEIMG);

    const uploadImg = async (e) => {
        console.log("Uploading image!")
        let upImg = e.target.files[0];
        const data = new FormData();
        data.set("image", upImg);
        let myUrl;
        try {
            const some = await axios.post("http://localhost:3001/api/upload", data);
            myUrl = some.data
            console.log("-----------response from Cloudinary:", myUrl);
            props.updateProp(myUrl);

            // try {
                // const {idk} = add2Model({
                //     variables: {
                //         id: _id, 
                //         profileImage: myUrl
                //     }
                // }). then((idk) => {
                //     console.log('--------added img URL to DB')
                //     const urlyes = idk.data.updateProfileImg.profileImage;
                //     setImage(urlyes)
                //     }
                // )
            // } catch (error) {
            //     console.log("Failed to add to DB: ",error);
            // }
        } catch (error) {
            console.log("Failed to upload: ",error);
        }
    }

    // const saveImgDB = (myUrl) => {
    //     try {
    //         const {idk} = add2Model({ //pass mutation as prop
    //             variables: {
    //                 id: _id, // id as prop
    //                 profileImage: myUrl 
    //             }
    //         }). then((idk) => {
    //             console.log('--------added img URL to DB')
    //             const urlyes = idk.data.updateProfileImg.profileImage;
    //             setImage(urlyes) //---- set image has to be handled----------------
    //             }
    //         )

    //     } catch (error) {
    //         console.log("Failed to add to DB: ", error);

    //     }

    // }
    
    const inputFileRef = useRef(null);
    const handleLabelClick = () => {
        inputFileRef.current.click();
    };

    return (
        <div className="
            overflow-hidden rounded-full w-12 h-12 bg-orange-500 flex items-center justify-center">
            <img
            src={pencil}
            alt="Circular Image"
            className="h-2/3 object-cover"
            onClick={handleLabelClick}
            />
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

