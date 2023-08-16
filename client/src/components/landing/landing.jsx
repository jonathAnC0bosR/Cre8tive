import { motion } from "framer-motion";
import backimg from "../../assets/images/Cre8ive_Bckground-02.png";
import './landingStyle.css'

const Landing = () => {
  return (
    <div className="bg-gradient-to-r from-[#0C0F11] to-[#22282D]
     min-h-screen pt-[70px] flex flex-col items-center">

        <div className="flex flex-row h-screen mb-5"  >
            <div className="basis-1/3 text-center flex flex-col	 p-20 z-[2] ">

                <div className="mb-16" >
                    <h1 className="text-white text-xl md:text-4xl lg:text-7xl" >Let's get</h1>
                    <div className="flex text-3xl md:text-6xl lg:text-9xl " >
                        <h1 className="text-white   " >Cre</h1>
                        <h1 className="text-orange-500 " >8</h1>
                        <h1 className="text-white " >tive</h1>
                    </div>
                </div> 

                <div className="" >
                    <t className="text-white  text-xs md:text-lg lg:text-xl" >Connect, Collaborate, and Trade with like-minded individuals in our community-driven platform!</t>
                </div>
            </div> 
            <img src={backimg} className="w-2/3 absolute right-0 top-0 z-[1] " ></img>
        </div>

        <div className="bg-zinc-950 mb-[2.5%] p-6 w-4/5 rounded-lg text-white shadow-xl shadow-stone-950	" >
            <h1 className="text-xl md:text-1xl lg:text-2xl m-[1%]" >Change the Way you collaborate</h1>
            <div className="flex " >
                <p className="p-[2%]" >Whether you're looking to offer your skills or seeking services that match your needs, our platform is designed to bring people together to exchange talents, expertise, and assistance.</p>
                <p className="p-[2%]">Whether you're looking to offer your skills or seeking services that match your needs, our platform is designed to bring people together to exchange talents, expertise, and assistance.</p>
            </div>

        </div>
        <div className="flex bg-zinc-950 mb-[2.5%] p-6 w-4/5 rounded-lg text-white shadow-xl shadow-stone-950" >
            <div className="" >
                <h1 className="text-xl md:text-1xl lg:text-2xl m-[1%]">Exchange Freely</h1>
                <p className="p-[2%]">Whether you're looking to offer your skills or seeking services that match your needs, our platform is designed to bring people together to exchange talents, expertise, and assistance.</p>
            </div>
            <div className="" >
                <h1 className="text-xl md:text-1xl lg:text-2xl m-[1%]">New Economy</h1>
                <p className="p-[2%]">Whether you're looking to offer your skills or seeking services that match your needs, our platform is designed to bring people together to exchange talents, expertise, and assistance.</p>
            </div>

        </div>

        <div className="m-[4%] text-center" >
            <h1 className=" mb-[12%] text-white text-xl md:text-2xl lg:text-4xl" >Join now!</h1>
            <buton className="bg-orange-500 text-white font-bold py-2 px-4 rounded" >Create an account</buton>
        </div>
        
        
    </div>
  );
};

export default Landing;
