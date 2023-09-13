import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // Google login
    const handelGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    };
    return (
        <div>
            <div className='text-center w-full'>
                <p className='font-bold'>Sign In with:</p>
                <div className='w-full mt-4'>
                    <FaGoogle onClick={handelGoogleLogin} className='text-2xl hover:text-orange cursor-pointer mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default Login;