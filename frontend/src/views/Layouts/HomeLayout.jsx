import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/navigation/MainNavigation";
import Footer from "../../components/layout/footer";

const HomeLayout = () => {
    return (
        <>
            <MainNavigation />

            <main className="mt-4">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default HomeLayout;