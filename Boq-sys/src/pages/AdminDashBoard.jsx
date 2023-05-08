import React, { useState } from "react";
import Cards from "../components/Cards";
import Model3 from "../components/Model/Model3";
import { useEffect } from "react";
import axios from "axios";

function AdminDashBoard() {
  const [Project, setProject] = useState([])
  const userID = sessionStorage.getItem('id')
  const getProject = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/getTotalProject/${userID} `, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${window.sessionStorage.getItem("access-token")}`,
        },
      });
      if (response.status === 200) {
        const data = response.data;
        setProject(data);
      } else {
        console.error("Server error:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProject()
  }, [])
  useEffect(() => {
  }, [])
  


  return (
    <div className="m-8">
      <div className="pb-2">
        <h1 className="text-lg">Dashboard</h1>
      </div>

      <Cards />

      <div className="pb-2">
        <h1 className="text-lg">Projects</h1>
      </div>
      <div className="flex flex-col pt-3">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50n text-ceter">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Project Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Total Area
                    </th>
                    <th scope="col"
                      className="px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider"> 
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-center">
                  {Project && Project.map((project) =>
                    // project.status === "445678cm" ? (
                      <tr key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {project.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{project.area}</div>
                      </td>

                      <td className="px-6 py-4 flex justify-center whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          <Model3 link="projectDetail" project={project}/>
                        </div>
                      </td>
                    </tr>
                    // ) : null
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
