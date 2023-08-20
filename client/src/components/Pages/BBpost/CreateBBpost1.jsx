import icon1 from "../../../assets/images/icon1.svg";
import icon2 from "../../../assets/images/icon2.svg";
import icon3 from "../../../assets/images/icon3.svg";
import exImg from "../../../assets/images/example-img.png";
import pencil from "../../../assets/images/pencil.svg";


const CreateBBpost = () => {
    return (
    <div className="lg:text-sm min-h-screen bg-gradient-to-r from-[#0C0F11] to-[#22282D] 
    flex flex-col items-center justify-center ">

        <div className="text-center mt-[100px]" >
            <h1 className="text-white text-lg " >Create Post</h1>
        </div>

        <div className="bg-zinc-950 shadow-xl shadow-stone-950 lg:w-2/3 w-5/6 px-6 sm:mt-40 lg:mt-20 rounded">

            <div className="bg-gradient-to-r from-[#353434] to-[#424141] text-white rounded-bl-lg rounded-br-lg flex-grow mx-4 sm:mx-4 md:mx-12">
                {/* <img src={exImg} className="w-full h-96" alt="Background Image"></img> */}
                <div className="flex flex-row justify-between px-10 py-8">
                    {/* <h1 className="text-3xl">Post Title </h1> */}
                    <input className="rounded bg-[#353535]" value="Give your post a Title!" ></input>
                </div>

                <p className="pr-10 pl-10 pb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dapibus eleifend facilisis. Nulla facilisi. Vivamus varius, turpis a
                eleifend imperdiet, leo sapien sagittis lorem, et rutrum lorem massa
                sed tellus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nullam aliquam lobortis nunc
                luctus leo. Donec in laoreet neque. Maecenas id mattis arcu.
                </p>
            </div>

        </div>

        



            

       
    </div>
    );
};
  
export default CreateBBpost;