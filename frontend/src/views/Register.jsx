import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="relative px-6">
            <div className="">
                <header>
                <div></div>
                <div className="userCreate__header__div">
                    Create your Doger account now
                </div>
                </header>

                <main className="userCreate__main">
                <form className="" enctype="multipart/form-data">
                    <input name="username" required={true} />
                    <input name="email" type="email" required={true} />
                    <input name="password" type="password" required={true} />
                    <input name="avatar" type="file" /> 

                    <div className="userCreate__main__form_div">
                    <div className="userCreate__main__form_div__div">
                        <button className="userCreate__main__form_div__div__button">
                        Create account
                        </button>
                    </div>
                    </div>
                </form>
                </main>
            </div>

            <div className="authCreate authCreate__card">
                <div className="userCreate__card__div">Login to your account</div>
                <div className="userCreate__card__div">
                <Link
                    href="{{ route('auth.create') }}"
                    className="userCreate__card__div__a_link"
                >
                    Login
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
