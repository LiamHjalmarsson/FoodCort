import { Link, Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/mainNavigation";

const HomeLayout = () => {
    return (
        <>

            <MainNavigation />

            <main className="mt-4">
                <Outlet />
            </main>

            <footer className="absolute mt-4 bottom-0 w-full p-3 lg:p-5 text-center bg-slate-600 text-white">
                <div>
                    Copywrite
                </div>
                <div>
                    Contact
                </div>
            </footer>
        </>
    );
}

export default HomeLayout;