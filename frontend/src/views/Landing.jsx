import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <div className="relative px-6">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            FoodCourt
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
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
        </>
    )
}

export default Landing;