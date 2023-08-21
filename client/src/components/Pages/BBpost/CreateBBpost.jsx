import icon1 from "../../../assets/images/icon1.svg";
import icon2 from "../../../assets/images/icon2.svg";
import icon3 from "../../../assets/images/icon3.svg";
import exImg from "../../../assets/images/example-img.png";
import React, { useState } from 'react';
import UploadPencil from "../../UI/uploadPencil"
import { useMutation } from '@apollo/client';
import { ADD_BBPOST } from '../../../utils/mutations'
import Auth from '../../../utils/auth'


const CreateBBpost = () => {

    //--- getting logged user ID
    const authService = Auth;
    const user = authService.getProfile().data;
    const {_id} = user;

    //url state variable
    const [URL, setURL]= useState("");
    const updateStateURL = (val) => {
        setURL(val);
    };

    const [createBBPost, {error}]= useMutation(ADD_BBPOST);

    const handleCreate = async (e) => {
        e.preventDefault();
        // console.log("submit.........", e);
        // console.log(URL);
        const title = e.target[0].value;
        const text = e.target[1].value;
        const created = new Date().toISOString();
        try {
            const {newPost} = createBBPost({
                variables:{
                    bulletPostTitle: title,
                    bulletText: text,
                    userId: _id,
                    createdAt: created,
                    imageUrl: URL,
                    deliveryTime: null,
                    serviceNeed: null,
                    serviceOffer: null
                }
            }).then((newPost)=>{
                console.log('--------added new post to DB');
            })

        } catch (error) {
            console.log("---Failed to add to DB: ",error);
        }

    }

    return (
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] flex items-center justify-center ">
        
        <div className="bg-zinc-950 shadow-xl shadow-stone-950 lg:w-1/3 w-5/6 p-6 mb-20 sm:mt-40 lg:mt-20  rounded-lg z-[1]">
            <div className="text-center m-4 text-xl" >
                <h1 className="text-white" >Create Post</h1>
            </div>

            <form className="flex flex-col" onSubmit={handleCreate} >
                <input type="text" className="rounded-lg bg-[#353535] h-8 w-2/3 m-4 p-2 text-white" placeholder=" Give your post a title!"  ></input>
                <textarea className="rounded-lg bg-[#353535] ml-4 mb-5 p-3 h-36 text-white"  placeholder="Tell us about the job..."></textarea>
                
                <div>
                    {/* border-2 border-pink-600 */}
                    <div className="bg-[#353535]   rounded-lg
                    grid grid-cols-6 flex items-center p-2 m-3 " >
                        <div className="col-span-1" >
                            <img src={icon3} className=""/>
                        </div>
                        <div className="col-span-3  text-center">
                            <h2 className="text-white font-bold text-base" >Service in Need</h2>
                        </div>
                        <button className="col-span-1 bg-orange-500 h-10  mx-auto w-32 text-white rounded-full" >Select</button>
                    </div>
                    <div className="bg-[#353535]    rounded-lg
                        grid grid-cols-6 flex items-center p-2 m-3 " >
                        <div className="col-span-1" >
                            <img src={icon2} className=""/>
                        </div>
                        <div className="col-span-3  text-center">
                            <h2 className="text-white font-bold text-base">Service Offered</h2>
                        </div>
                        <button className="col-span-1 bg-pink-600  h-10  mx-auto w-32 text-white rounded-full" >Select</button>
                    </div>
                    <div className="bg-[#353535] rounded-lg
                    grid grid-cols-6 flex items-center p-2 m-3 " >
                        <div className="col-span-1" >
                            <img src={icon1} className=""/>
                        </div>
                        <div className="col-span-3  text-center">
                            <h2 className="text-white font-bold text-base">Delivery Time</h2>
                        </div>
                        <button className="col-span-1 bg-teal-500  h-10  mx-auto w-32 text-white rounded-full" >Select</button>
                    </div>

                </div>

                <div className='flex  relative  items-center justify-center m-4 p-2' >   
                    <div className="">
                        <img
                        src={exImg}
                        className="w-full h-full  rounded-xl hover:opacity-70"
                        />
                    </div>

                    <div className="absolute top-10 right-[120px]" > 
                        <UploadPencil updateProp={updateStateURL} />
                    </div>
                </div>

                <button className="m-6 text-pink-600 font-bold bg-white h-10  mx-auto w-32 rounded-full"  >Create Post!</button>
                

            </form>

            

        </div>
       
    </div>
    );
};
  
export default CreateBBpost;