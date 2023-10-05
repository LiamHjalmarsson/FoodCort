import { Link, useRouteError } from "react-router-dom";
import MainNavigation from "../../components/navigation/MainNavigation";
import Footer from "../../components/layout/footer";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <>
            <MainNavigation />

            <main className="mt-4">
                <div className="mt-4 p-4 border border-red-400">
                    <h1 className="text-red-400">
                        Error 
                    </h1>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Error;