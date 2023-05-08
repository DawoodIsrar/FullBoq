import axios from 'axios';
import React, { 
    // useEffect, useState 
} from 'react'
import user from '../assets/user.png'
export default function Profile() {

    // useEffect(() => {
    //     const ProfileData = async () => {
    //         const { apiUrl } = config()
    //         try {
    //             const response = await axios.get(`${apiUrl}getProfiledetail/${ID}`)
    //             setEmployeeData(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     ProfileData()
    // }, [ID])
    return (
        <section className='min-h-screen'>
            <div className='bg-gray-50 min-h-screen'>
                <div className="container mx-auto p-5">
                    <h1 className="text-4xl font-medium py-5">Profile</h1>
                    <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2">
                            {/* {employeeArray.map((data) => ( */}
                                <div className="bg-white p-3 border-t-4 border-blue-400 shadow-lg">
                                    <div className="image overflow-hidden">
                                        <img className="h-auto w-full mx-auto" src={user} alt="" />
                                    </div>
                                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Waqas Khan</h1>
                                    <h3 className="text-gray-600 font-lg text-semibold leading-6">Businessman</h3>
                                </div>
                            {/* ))} */}
                            <div className="my-4"></div>
                        </div>
                        <div className="w-full md:w-9/12 mx-2 lg:h-64">
                            <div className="bg-white p-3 shadow-lg rounded-sm border-2">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-blue-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    {/* {employeeArray.map((data, index) => ( */}
                                        <div className="grid md:grid-cols-2 text-sm">
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">ID</div>
                                                <div className="px-4 py-2">1</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Name</div>
                                                <div className="px-4 py-2">Waqas Khan</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Gender</div>
                                                <div className="px-4 py-2">Male</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                                <div className="px-4 py-2">03456789098</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Address</div>
                                                <div className="px-4 py-2">Peshawar Hayatabad</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                                <div className="px-4 py-2">
                                                    23/2/1999                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Email</div>
                                                <div className="px-4 py-2" style={{ wordWrap: "break-word", wordBreak: "break-all", maxWidth: "95%" }}>
                                                    waqas@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                    {/* ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}