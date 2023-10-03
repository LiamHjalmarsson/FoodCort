import { Link, Outlet } from "react-router-dom";


const navigations = [
    {
        name: "Home",
        to: "/"
    },
    {
        name: "Dashboard",
        to: "/dashboard"
    },
]
const HomeLayout = () => {
    return (
        <>
            <nav className="flex items-center justify-between p-6 lg:px-8 gap-8 bg-slate-500 text-white">
                <div>
                    <h1 className="text-lg">
                        FoodCourt
                    </h1>
                </div>
                <ul className="flex flex-grow justify-start gap-4">
                    {
                        navigations.map((path) => (
                            <li key={path.name}>
                                <Link to={path.to} className="text-sm font-semibold leading-6 text-white">
                                    {path.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <Link to="/login">
                        Log in
                    </Link>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer className="text-center p-4 bg-slate-400">
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