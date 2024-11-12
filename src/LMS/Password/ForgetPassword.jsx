import { useState } from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError("");
            // Proceed with sending the verification link logic here
            console.log("Sending verification link to:", email);
        } else {
            setError("Please enter a valid email address.");
        }
    };

    return (
        <div className="flex items-center justify-center h-[100vh]">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center gap-6 rounded-lg p-4 text-black w-80 h-[26rem] shadow-[0_0_10px_black]"
            >
                <h1 className="text-center text-2xl font-bold">Forget Password</h1>

                <p>
                    Enter your registered email, we will send you a verification link on
                    your registered email from which you can reset your password
                </p>

                <div className="flex flex-col gap-1">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your registered email"
                        className="bg-transparent px-2 py-1 border"
                    />
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                </div>

                <button
                    className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    type="submit"
                >
                    Get Verification Link
                </button>

                <p className="text-center">
                    Already have an account?{" "}
                    <Link to={"/login"} className="link text-accent cursor-pointer">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default ForgetPassword;
