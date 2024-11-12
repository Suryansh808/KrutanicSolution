import { useState } from "react";
import { Link } from "react-router-dom";

function login() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [errors, setErrors] = useState({ email: "", otp: "" });

    const validateEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let valid = true;
        let emailError = "";
        let otpError = "";

        if (!validateEmail(email)) {
            emailError = "Please enter a valid email.";
            valid = false;
        }

        if (otp.length !== 6) {
            otpError = "OTP should be 6 digits.";
            valid = false;
        }

        setErrors({ email: emailError, otp: otpError });
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle login logic here if form is valid
            console.log("Logging in...");
        }
    };

    return (
        <div className="flex items-center justify-center h-[90vh]">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center gap-3 rounded-lg text-black p-4 w-80 shadow-[0_0_10px_black]"
            >
                <h1 className="text-center text-2xl font-bold">Login Page</h1>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email..."
                        className="bg-transparent px-2 py-1 border"
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="otp" className="font-semibold">OTP</label>
                    <input
                        type="text"
                        name="otp"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter The OTP..."
                        className="bg-transparent px-2 py-1 border"
                    />
                    {errors.otp && <p className="text-red-600 text-sm">{errors.otp}</p>}
                </div>

                <button
                    type="submit"
                    className="mt-2 bg-yellow-600 hover:bg-yellow-500 py-2 font-semibold text-lg cursor-pointer transition-all ease-in-out duration-300 rounded-sm"
                >
                    Login
                </button>

                <Link to={"/ForgotPassword"}>
                    <p className="text-center link text-accent cursor-pointer">
                        Forget Password
                    </p>
                </Link>

                <p className="text-center text-black">
                    Don't have an account? <Link to="/signup" className="link text-accent cursor-pointer">Signup</Link>
                </p>
            </form>
        </div>
    );
}

export default login;
