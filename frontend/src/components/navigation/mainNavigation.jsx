import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import Backdrop from "../ui/Backdrop";

const MainNavigation = (props) => {
    let [isOpen, setIsOpen] = useState(false)

    let openDrawerHandler = () => {
        setIsOpen(true);
    }
    
    let closeDrawerHandler = () => {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && <Backdrop onClick={closeDrawerHandler} />}

            <SideDrawer show={isOpen} onClick={closeDrawerHandler}>
                <nav className="h-full">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <MainHeader>
                <button className="w-12 h-8 bg-transparent border-none flex flex-col justify-around mr-8 cursor-pointer md:hidden" onClick={openDrawerHandler}>
                    <span className="block w-12 h-1.5 rounded-md bg-white"></span>
                    <span className="block w-12 h-1.5 rounded-md bg-white"></span>
                    <span className="block w-12 h-1.5 rounded-md bg-white"></span>
                </button>

                <div>
                    <h1 className="text-lg lg:text-xl xl:text-2xl mr-4">
                        <Link to="/" className="text-xl text-purple-300 font-bold hover:border-b-4 pb-1">
                            FoodCourt
                        </Link>
                    </h1>
                </div>

                <nav className="w-full hidden md:block">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    );
};

export default MainNavigation;
