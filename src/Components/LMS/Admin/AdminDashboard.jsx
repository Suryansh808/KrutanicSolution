import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar, Pie } from "react-chartjs-2";
import { BsCollectionPlayFill, BsTrash } from 'react-icons/bs';
import { FaUsers } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { TiEdit } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

function AdminDashboard() {
    const navigate = useNavigate();

    // Mock data for static display
    const allUsersCount = 200;
    const subscribedCount = 120;
    const monthlySalesRecord = [20, 30, 45, 60, 75, 90, 85, 70, 55, 50, 40, 65];
    const allPayments = { count: 120 };

    const userData = {
        labels: ["Registered User", "Enrolled User"],
        datasets: [  
            {
                label: "User Details",
                data: [allUsersCount, subscribedCount],
                backgroundColor: ["yellow", "green"],
                borderWidth: 1,
                borderColor: ["yellow", "green"]
            }
        ]
    };

    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Sales/Month",
                data: monthlySalesRecord,
                backgroundColor: ["red"]
            }
        ]
    };

    const courses = [
        { id: 1, title: "JavaScript Basics", category: "Programming", createdBy: "John Doe", numberOfLectures: 10, description: "Introduction to JavaScript." },
        { id: 2, title: "React Advanced", category: "Frontend", createdBy: "Jane Smith", numberOfLectures: 15, description: "Advanced concepts in React." },
        { id: 3, title: "Node.js Essentials", category: "Backend", createdBy: "Alice Brown", numberOfLectures: 12, description: "Getting started with Node.js." },
    ];

    return (
       
            <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-black">
                <h1 className="text-center text-3xl sm:text-5xl font-semibold text-yellow-500">
                    Admin Dashboard
                </h1>

                <div className="grid md:grid-cols-2 gap-5 m-auto md:mx-10">
                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="w-80 h-80">
                            <Pie data={userData} />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Registered Users</p>
                                    <h3 className="text-4xl font-bold">{allUsersCount}</h3>
                                </div>
                                <FaUsers className="text-yellow-500 text-5xl" />
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Subscribed Users</p>
                                    <h3 className="text-4xl font-bold">{subscribedCount}</h3>
                                </div>
                                <FaUsers className="text-green-500 text-5xl" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="h-80 w-full relative">
                            <Bar className="absolute bottom-0 h-80 w-full" data={salesData} />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Subscription Count</p>
                                    <h3 className="text-4xl font-bold">{allPayments.count}</h3>
                                </div>
                                <FcSalesPerformance className="text-yellow-500 text-5xl" />
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Total Revenue</p>
                                    <h3 className="text-4xl font-bold">{allPayments.count * 499}</h3>
                                </div>
                                <GiMoneyStack className="text-green-500 text-5xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10 text-black">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-center text-2xl sm:text-3xl font-semibold">
                            Courses Overview
                        </h1>
                        <button
                          onClick={() => navigate("/CreateCourse")}
                            className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-2 sm:px-4 font-semibold sm:text-lg cursor-pointer"
                        >
                            Create new course
                        </button>
                    </div>

                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>S No</th>
                                    <th>Course Title</th>
                                    <th>Course Category</th>
                                    <th>Instructor</th>
                                    <th>Total Lectures</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, idx) => (
                                    <tr key={course.id}>
                                        <td>{idx + 1}</td>
                                        <td>{course.title}</td>
                                        <td>{course.category}</td>
                                        <td>{course.createdBy}</td>
                                        <td>{course.numberOfLectures}</td>
                                        <td>{course.description}</td>
                                        <td className="flex items-center gap-4">
                                            <button
                                                className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-3 rounded-md font-bold"
                                                onClick={() => navigate("/DisplayLectures", { state: { ...course } })}
                                            >
                                                <BsCollectionPlayFill />
                                            </button>
                                            <button
                                                className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-xl py-2 px-3 rounded-md font-bold"
                                                onClick={() => navigate("/EditCourse", { state: { ...course } })}
                                            >
                                                <TiEdit />
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-3 rounded-md font-bold"
                                                onClick={() => alert("Course deleted")}
                                            >
                                                <BsTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
       
    );
}

export default AdminDashboard;
