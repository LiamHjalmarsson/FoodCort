import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1> Login </h1>
            <Link to="/register">
                Register
            </Link>
        </>
    )
}

export default Login;