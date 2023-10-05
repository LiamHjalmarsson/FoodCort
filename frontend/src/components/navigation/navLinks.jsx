import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
    return (
        <ul className="list-none m-0 p-0 w-full h-full flex gap-8 justify-center items-center flex-col md:flex-row">
            <li className="navlinks__li">
                <NavLink to="/" >
                    Home
                </NavLink>
            </li>
            <li className="navlinks__li">
                <NavLink to="/users">
                    Users
                </NavLink>
            </li>
            <li className="navlinks__li">
                <NavLink to="/items/add">
                    Add
                </NavLink>
            </li>
            <li className="navlinks__li">
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>
            </li>
            <li className="navlinks__li">
                <NavLink to="/auth">
                    Authenticate
                </NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;