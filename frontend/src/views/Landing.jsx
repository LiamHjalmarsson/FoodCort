import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <div className="py-32 sm:py-48 lg:py-56">
                <h1 className="text-slate-600 text-5xl text-center font-bold font md:text-6xl">
                    FOODCOURT
                </h1>
                <div className="mt-8">
                    <div className="mx-auto max-w-2xl">
                        <div className="text-center p-4">
                            <p className="mt-6 text-lg leading-8 text-gray-900">
                                FoodCourt contains everything that you need that is relevent to food. 
                                Want to be part of taking advantage of the full information and share your information.
                                Signup today!
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link to="/login" className="rounded-md bg-jet px-3.5 py-2.5 text-sm font-semibold text-timerwolf shadow-sm hover:bg-ashGray hover:text-jet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/4">
                                    Log in
                                </Link>
                                <Link to="/register" className="rounded-md bg-jet px-3.5 py-2.5 text-sm font-semibold text-timerwolf shadow-sm hover:bg-ashGray hover:text-jet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/4">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;