import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <div className="py-32 sm:py-48 lg:py-56">
                <h1 className="text-slate-600 text-5xl text-center font-bold font m:text-6xl">
                    FOODCOURT
                </h1>
                <div className="mt-8">
                    <div className="mx-auto max-w-2xl">
                        <div className="text-center">
                            <p className="mt-6 text-lg leading-8 text-gray-900">
                                FoodCourt contains everything that you need that is relevent to food. 
                                Want to be part of taking advantage of the full information and share your information.
                                Signup today!
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link to="/login" className="btn-primary">
                                    Log in
                                </Link>
                                <Link to="/register" className="btn-primary">
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