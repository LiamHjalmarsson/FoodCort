import { Link } from "react-router-dom";
import MainHeader from "./mainHeader";
import NavLinks from "./navLinks";
import SideDrawer from "./sideDrawer";
import { useState } from "react";
import Backdrop from "../ui/backdrop";

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
                <button className="w-12 h-12 bg-transparent border-none flex flex-col justify-around mr-8 cursor-pointer md:hidden" onClick={openDrawerHandler}>
                    <span className="span"></span>
                    <span className="span"></span>
                    <span className="span"></span>
                </button>

                <div>
                    <h1 className="text-lg lg:text-xl xl:text-2xl mr-4">
                        <Link to="/">FoodCourt</Link>
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
