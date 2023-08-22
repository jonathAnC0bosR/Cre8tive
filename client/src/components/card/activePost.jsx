
import { BiPencil } from "react-icons/bi";
import ActiveJobsCard from "../UI/ActiveJobsCard";


const ActivePosts = () => {
    return (
        <div>
            <div className="flex flex-col mb-5 m-3">
              {/* Card Title */}
              <div className="flex flex-row justify-between text-white text-lg font-bold bg-teal-500 rounded-t-lg pl-8 pr-4 pt-3 pb-2">
                <h3>Portraits 4 Grad</h3>
                <button>
                  <BiPencil size={"1.5em"} />
                </button>
              </div>
              {/* Card */}
              <div className="relative rounded-b-lg w-80 overflow-hidden">
                {/* Pseudo-element for the blurred background */}
                <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>{" "}
                {/* Content */}
                <ActiveJobsCard />
              </div>
            </div>
          </div>
    )

}

export default ActivePosts;