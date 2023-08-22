import { useQuery, useMutation } from '@apollo/client';
import { GET_ALLUSERS } from '../../utils/queries'

const AllUsers = () =>{

    const { loading, data } = useQuery(GET_ALLUSERS);
    const allUsers = data?.getUsers || [];
    console.log("USERS query: ", loading , allUsers);

    return (
            <div className='' >
                <h2 className="text-white text-2xl text-df4088 font-bold mt-4 gap-2">
                  Suggested Profiles
                </h2>

                {/* --------------dynamic scroll */}
                <div className="flex flex-row overflow-x-scroll custom-scrollbar gap-9 mt-1 mb-7 pb-5">
                {loading ? (
                    <div>Loading...</div>
                    ) : (
                    allUsers.map((user) => (
                        <div key={user._id} className="" >
                            <div className="overflow-hidden rounded-full h-44 w-44 mt-8 mb-2">
                                <img
                                src={user.profileImage}
                                alt="Circular Image"
                                className="w-full h-full object-cover "
                                />
                            </div>
                            <div className='flex items-center justify-center ' >
                                <h1 className='text-pink-600 bg-white rounded-full px-1 mt-1' >{user.username} </h1>
                            </div>
                        </div>
                    ))
                    )
                }
                </div>
                
            </div>

    );

}

export default AllUsers;
