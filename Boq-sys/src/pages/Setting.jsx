import React from "react";
import { Link } from "react-router-dom";

function Setting() {

  return (
    <div className="m-8">
        <div><h1 className="text-lg pb-4">Setting</h1></div>
        <div className="flex justify-center shadow-lg py-8">
         <div className="flex flex-col items-center justify-center ">
      <img src="https://via.placeholder.com/150" alt="Dummy Image" className="rounded-full mb-4" />
      <div className="flex space-x-4 pt-3">
        <Link to="updateProfile">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log("Update Profile")}>
          <span className="pr-3">Update Profile</span>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        </Link>
       <Link to="updatePassword"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log("Change Password")}>
        <span className="pr-3">Change Password</span>
        <i class="fa-sharp fa-solid fa-wrench"></i>
        </button>
        </Link>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Setting;
