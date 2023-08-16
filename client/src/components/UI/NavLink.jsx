import { Link } from "react-router-dom";
const styles = "py-1 h-10 my-auto hover:bg-pink-600 hover:rounded-lg hover:ease-in-out duration-500"

const NavLink = (props) => {
  return (
    <div className= {`${props.hover} ${styles}`}>
        <Link to={props.route}>
            <div className="flex flex-row items-center px-3">
                {props.children}
                <p onClick={props.onClick} className="mx-auto">
                    {props.title}
                </p>
            </div>
        </Link>
    </div>
  );
};

export default NavLink;
