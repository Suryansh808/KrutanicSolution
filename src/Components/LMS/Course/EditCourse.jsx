import { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";


function EditCourse() {
    const { state } = useLocation();

    // If state is not present, we can redirect or handle the absence of data accordingly.
    useEffect(() => {
        if (!state) {
            // Handle case where course data is not available, e.g., redirect or show a message.
            console.log("No course data available.");
        }
    }, [state]);

    return (
        
            <div className="flex items-center justify-center h-[100vh] text-black">
                <div className="flex flex-col justify-center gap-5 rounded-lg p-4 mt-5 text-black w-[80vw] md:w-[700px] sm:my-10 relative shadow-[0_0_10px_black]">
                    <div>
                        <Link to={"/"} className="absolute left-2 text-lg text-accent cursor-pointer">
                            <AiOutlineArrowLeft />
                        </Link>
                    </div>

                    <h1 className="text-center text-2xl font-bold">Course Details</h1>

                    <main className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
                        <div>
                            <div>
                                {state?.thumbnail?.secure_url ? (
                                    <img
                                        className="w-full h-44 m-auto border"
                                        src={state.thumbnail.secure_url}
                                        alt="Course Thumbnail"
                                    />
                                ) : (
                                    <div className="w-full h-44 m-auto flex items-center justify-center border">
                                        <h1 className="font-bold text-lg">No Thumbnail Available</h1>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-semibold">Course Title</h2>
                                <p>{state?.title}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-semibold">Course Instructor</h2>
                                <p>{state?.createdBy}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-semibold">Course Category</h2>
                                <p>{state?.category}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-semibold">Course Description</h2>
                                <p>{state?.description}</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        
    );
}

export default EditCourse;
