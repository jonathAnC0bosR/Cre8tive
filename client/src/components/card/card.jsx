import { BiPencil } from "react-icons/bi";
import ActiveJobsCard from "../UI/ActiveJobsCard";


const PostCard = ({bbPosts}) => {
  console.log(bbPosts)

    return (
      
        <div id="postCard" className="pt-[70px]" >

            <h1>this is post card</h1>

            {
            bbPosts.map((post)=>{
              <div className="flex flex-col mb-5">
              {/* Card Title */}
              <div className="flex flex-row justify-between text-white text-lg font-bold bg-df4088 rounded-t-lg pl-8 pr-4 pt-3 pb-2">
                <h3>{post.bulletPostTitle} </h3>
                <button>
                  <BiPencil size={"1.5em"} />
                </button>
              </div>
              {/* Card */}
              <div className="relative rounded-b-lg w-80 overflow-hidden relative ">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner shadow"></div>
                {/* Content */}
                <ActiveJobsCard />
              </div>
            </div>

            }) }
            

        </div>
    )

}

export default PostCard;