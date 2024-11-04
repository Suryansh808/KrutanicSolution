import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";


function CreateCourse() {
    return (
        
            <div className="flex items-center justify-center h-[100vh] ">
                <form 
                    className="flex flex-col justify-center gap-2 md:gap-5 rounded-lg p-4 mt-5 relative text-black w-[80vw] md:w-[700px] sm:my-10 shadow-[0_0_10px_black]"
                >
                    <div>
                        <Link to={"/courses"} className="absolute left-2 text-xl text-accent cursor-pointer">
                            <AiOutlineArrowLeft />
                        </Link>
                    </div>

                    <h1 className="text-center text-2xl font-bold ">
                        Create New Course
                    </h1>

                    <main className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
                        <div>
                            <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    <div className="w-full h-44 m-auto flex items-center justify-center border">
                                        <h1 className="font-bold text-lg">Upload your course thumbnail</h1>
                                    </div>
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_uploads"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="title">
                                    Course title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter course title"
                                    className="bg-transparent px-2 py-1 border"
                                />
                            </div>   
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="createdBy">
                                    Course Instructor
                                </label>
                                <input
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter course instructor"
                                    className="bg-transparent px-2 py-1 border"
                                />
                            </div>  
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="category">
                                    Course category
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter course category"
                                    className="bg-transparent px-2 py-1 border"
                                />
                            </div>      
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="description">
                                    Course description
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Enter course description"
                                    className="bg-transparent px-2 py-1 h-24 overflow-scroll resize-none border"
                                />
                            </div>        
                        </div>
                    </main>

                    <button type="button" className="w-full bg-yellow-600 text-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out py-2 rounded-sm font-semibold">
                        Create Course
                    </button>
                </form>
            </div>
        // 
    );
}

export default CreateCourse;
