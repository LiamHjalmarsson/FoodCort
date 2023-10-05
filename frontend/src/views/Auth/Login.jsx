import Logo from "../../components/ui/Logo";
import Input_form from "../../components/ui/Input_form";

const Login = () => {
    return (
        <>
            <div className="bg-slate-500 h-screen">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-2xl">
                        Log in
                    </h1>
                    <Logo />
                </div>
                <div className="relative flex justify-center">
                    <div>
                        <form>
                            <Input_form 
                                label="Name"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;