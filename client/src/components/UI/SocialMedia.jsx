import { BiPencil } from "react-icons/bi";

const SocialMedia = (props) => {
  return (
    <div className="lg:pr-7 mb-3 ">
      <div className="bg-zinc-800 flex justify-between items-center border-2 h-10 w-full border-pink-600 rounded-md">
        <button className="flex flex-row items-center">
          {" "}
          <img src={props.src} className={`${props.styles} mx-2`} />{" "}
          <p>{props.title}</p>
        </button>
          <div className="mr-2"><BiPencil /></div>
      </div>
    </div>
  );
};

export default SocialMedia;
