import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateProfilePicture = (file) => {
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg+xml"];
        if (!file) return "Profile picture is required.";
        if (!allowedTypes.includes(file.type)) return "Only .jpg, .jpeg, .png, and .svg formats are allowed.";
        if (file.size > 2 * 1024 * 1024) return "File size should not exceed 2MB.";
        return null;
    };

    const validateForm = () => {
        const newErrors = {};
        if (!fullName) newErrors.fullName = "Name is required.";
        if (!email || !validateEmail(email)) newErrors.email = "Please enter a valid email address.";
        if (!otp || otp.length !== 6) newErrors.otp = "OTP should be exactly 6 digits.";
        
        const profilePicError = validateProfilePicture(profilePicture);
        if (profilePicError) newErrors.profilePicture = profilePicError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Account created successfully with:", { fullName, email, otp, profilePicture });
        }
    };

    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.files[0]);
        setErrors((prev) => ({ ...prev, profilePicture: "" }));
    };

    return (
        <div className="flex items-center justify-center h-[90vh]">
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col justify-center gap-3 rounded-lg text-black p-4 w-80 shadow-[0_0_10px_black]"
            >
                <h1 className="text-center text-black text-2xl font-bold">Registration Page</h1>
                
                <label htmlFor="image_uploads" className="cursor-pointer">
                    <CgProfile className="w-24 h-24 rounded-full m-auto" />
                </label>
                <input 
                    type="file"
                    name="image_uploads"
                    id="image_uploads" 
                    accept=".jpg, .jpeg, .png, .svg"
                    className="hidden"
                    onChange={handleProfilePictureChange}
                />
                {errors.profilePicture && <p className="text-red-600 text-sm text-center">{errors.profilePicture}</p>}

                <div className="flex flex-col gap-1">
                    <label htmlFor="fullName" className="font-semibold">Name</label>
                    <input 
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your Full Name..."
                        className="bg-transparent px-2 py-1 border"
                    />
                    {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
                </div>

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
                        placeholder="Enter the OTP..."
                        className="bg-transparent px-2 py-1 border"
                    />
                    {errors.otp && <p className="text-red-600 text-sm">{errors.otp}</p>}
                </div>

                <button 
                    type="submit" 
                    className="mt-2 bg-yellow-600 hover:bg-yellow-500 py-2 font-semibold text-lg cursor-pointer transition-all ease-in-out duration-300 rounded-sm"
                >
                    Create Account
                </button>
                
                <p className="text-center">
                    Already have an account? <Link to="/login" className="link text-accent cursor-pointer">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;
