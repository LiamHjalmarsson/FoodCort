import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    console.log(error);
    return (
        <>
            <h1>
                Error
            </h1>
            <Link to="/">
                Back home
            </Link>
        </>
    )
}

export default Error;