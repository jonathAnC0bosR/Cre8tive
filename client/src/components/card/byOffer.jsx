import { BiSolidCircle } from "react-icons/bi";

import { GET_BBPOST_byOFFER } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const ByOffer = (props) => {
    console.log(props.title);
    const { loading, data } = useQuery(GET_BBPOST_byOFFER, {
        variables: {"skillTitle": props.title}}
    );
    const bbPosts = data?.getBulletinsByServiceOffer || [];
    console.log("--Query: ", !loading, bbPosts);
    
    

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          bbPosts.map((post) => (
            <div key={post.id} className="flex flex-col mb-5 mx-2">
                <div className="flex flex-row justify-between w-80  text-white text-lg font-bold bg-df4088 rounded-t-lg pl-8 pr-4 pt-3 pb-2">
                    <h3>{post.bulletPostTitle}</h3>
                </div>
  
  
                <div className="relative rounded-b-lg w-80 overflow-hidden relative py-5 px-2 ">
                
                {post.imageURL ? (
                  <img
                    src={post.imageURL}
                    className="absolute inset-0 bg-cover bg-center filter blur-xs shadow-inner"
                  ></img>
                ) : (
                  <div className="absolute inset-0 bg-[url('assets/images/Photo.png')] bg-cover bg-center filter blur-xs shadow-inner"></div>
                )}
  
                <div className="relative">
                  <div className="mx-4">
                    <div className="flex mb-8 flex-row items-center text-white mx-5 mt-5 mb-1">
  
                      {/* User Profile Picture */}
                      <div className="overflow-hidden rounded-full w-16 h-16 ">
                        <img
                          src={post.userID.profileImage}
                          alt="Circular Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
  
                      <div className="flex-column ml-4">
                        {/* User Location */}
                        <p className="text-xs text-shadow">
                          {post.userID.location}{" "}
                        </p>
                        {/* Username */}
                        <p className="text-xl font-bold text-shadow">
                          {post.userID.username}
                        </p>
                        {/* User Rating */}
                        <div className="flex flex-row text-shadow text-lg">
                          <BiSolidCircle className="text-df4088" />
                          <BiSolidCircle className="text-df4088" />
                          <BiSolidCircle className="text-df4088" />
                          <BiSolidCircle className="text-df4088" />
                          <BiSolidCircle className="text-gray-200" />
                        </div>
                      </div>
                    </div>
  
                    <div className="flex m-2 items-center justify-center gap-8 mx-auto bg-white rounded-full ">
                      <div>
                        <h3 className="text-pink-600 text-lg font-bold mb-1">
                          Needs
                        </h3>
                      </div>
                      <div>
                        {post.serviceNeed &&
                          post.serviceNeed.length > 0 && (
                            <p className="text-lg font-bold ">
                              {post.serviceNeed[0].skillTitle}
                            </p>
                          )}
                      </div>
                    </div>
  
                    <div className="flex m-2 items-center justify-center gap-8 mx-auto bg-white rounded-full ">
                      <div>
                        <h3 className="text-pink-600 font-bold text-lg mb-1 ">
                          Offers
                        </h3>
                      </div>
                      <div>
                        {post.serviceOffer &&
                          post.serviceOffer.length > 0 && (
                            <p className="text-lg font-bold ">
                              {post.serviceOffer[0].skillTitle}
                            </p>
                          )}
                      </div>
                    </div>
  
                    <div className="flex justify-end">
                      <button className="bg-df4088 text-white text-lg font-bold px-7 py-2 m-4 rounded-3xl transition-all duration-300 transform hover:scale-110 custom-shadow">
                        More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    )
}

export default ByOffer;