import { NavLink } from "react-router-dom";

const NavLinks = ({onClick}) => {
    return (
        <ul className="list-none m-0 p-0 w-full h-full flex gap-8 md:justify-center items-center flex-col md:flex-row ">
            <li className="m-4 md:mb-2">
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li className="m-4 md:mb-2">
                <NavLink to="/users">
                    Users
                </NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;