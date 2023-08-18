import { motion } from "framer-motion";
import backimg from "../../assets/images/Cre8ive_Bckground-02.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const Variants = {
    visible: {
      backgroundColor: ["#60F", "#09F", "#FA0"],
      transition: {
        delay: 1,
        duration: 2,
        ease: [0.075, 0.82, 0.165, 1],
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <div
      className="bg-gradient-to-r from-[#0C0F11] to-[#22282D]
     min-h-screen pt-[70px] flex flex-col items-center"
    >
      <div className="grid grid-cols-1 lg:flex lg:flex-row lg:min-h-screen mb-5">
        <div className="lg:basis-1/3 text-center lg:p-28 p-0 z-[2]  ">
          <div className="mb-16">
            <h1 className="text-white text-2xl md:text-5xl lg:text-7xl">
              Let's get
            </h1>
            <div className="flex justify-center text-4xl md:text-7xl lg:text-9xl ">
              <h1 className="text-white   ">Cre</h1>
              <h1 className="text-orange-500 ">8</h1>
              <h1 className="text-white ">tive</h1>
            </div>
          </div>
          <p className="text-white  md:text-xl lg:text-2xl">
            Connect, Collaborate, and Trade with like-minded individuals in our
            community-driven platform!
          </p>
        </div>
        <img
          src={backimg}
          className="lg:w-2/3 mx-auto lg:absolute lg:right-0 lg:top-0 z-[1] "
        ></img>
      </div>

      <div className=" md:-mt-28 lg:-mt-0 -mt-20  bg-zinc-950 mb-[2.5%] p-6 w-4/5 rounded-lg text-white shadow-xl shadow-stone-950 z-[1]">
        <h1 className="text-xl text-center md:text-1xl lg:text-2xl m-[1%]">
          Change the Way you collaborate
        </h1>
        <div className="flex ">
          <p className="p-[2%]">
            Whether you're looking to offer your skills or seeking services that
            match your needs, our platform is designed to bring people together
            to exchange talents, expertise, and assistance.
          </p>
          <p className="p-[2%]">
            Whether you're looking to offer your skills or seeking services that
            match your needs, our platform is designed to bring people together
            to exchange talents, expertise, and assistance.
          </p>
        </div>
      </div>
      <div className="flex bg-zinc-950 mb-[2.5%] p-6 w-4/5 rounded-lg text-white shadow-xl shadow-stone-950">
        <div className="">
          <h1 className="text-xl lg:text-center md:text-1xl lg:text-2xl m-[1%]">
            Exchange Freely
          </h1>
          <p className="p-[2%]">
            Whether you're looking to offer your skills or seeking services that
            match your needs, our platform is designed to bring people together
            to exchange talents, expertise, and assistance.
          </p>
        </div>
        <div className="">
          <h1 className="text-xl lg:text-center md:text-1xl lg:text-2xl m-[1%]">
            New Economy
          </h1>
          <p className="p-[2%]">
            Whether you're looking to offer your skills or seeking services that
            match your needs, our platform is designed to bring people together
            to exchange talents, expertise, and assistance.
          </p>
        </div>
      </div>

      <div className="m-[4%] text-center">
        <h1 className=" mb-[12%] text-white text-xl md:text-2xl lg:text-4xl">
          Join now!
        </h1>
        <Link to={'/signup'}>
          <motion.button
            variants={Variants}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", damping: 10, stiffness: 300 }}
            animate="visible"
            className=" text-white font-bold py-2 px-4 rounded"
          >
            Create an account
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
