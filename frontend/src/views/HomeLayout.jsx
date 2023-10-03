import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            <nav>
                Nav
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default HomeLayout;