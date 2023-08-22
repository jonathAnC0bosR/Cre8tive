import { Link } from "react-router-dom";

const Sock = () => {

    return (
        <div className="flex items-center justify-center  justify-around p-10
            bg-zinc-950 rounded-xl m-9">
            <div>
                <h1 className="text-white m-8 text-[40px]">Join Our Newsletter</h1>
                <h2 className=" text-white text-[16px]">Sign up for
                    our email newsletter to get our latest news</h2>
                <div className="m-8">
                    <input type="email" className="rounded-l-full" name="" placeholder="Enter email"/>
                    <span class="input-group-btn">
                    <button type="submit"
                    className=" rounded-r-full bg-pink-600 padding: py-[11.5px] px-[24px]    c">Subscribe</button>
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center " >
                <h1 className="text-white m-8 text-[40px]">Contac Us</h1>
                <h2 className=" text-white text-[16px]">Sign up for
                    our email newsletter to get our latest news</h2>

                <Link className="m-8 w-1/3 text-lg rounded-full bg-white text-pink-600 
                font-bold padding: py-[11.5px] px-[24px] c" to={"/contactUs"}>
                    <h1 className="text-center">Take me!</h1>
                </Link>


            </div>

        </div>
    )
}

export default Sock;