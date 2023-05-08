import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function ProjectDetailsCard() {
  const { id } = useParams()
  const [Data, setData] = useState([])
  const getTotalMaterial = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/getTotalMaterial/${id} `, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${window.sessionStorage.getItem("access-token")}`,
        },
      });
      if (response.status === 200) {
        const data = response.data;
        const total_bricks = data.reduce((acc, curr) => {
          return acc + curr.total_bricks;
        }, 0);
        const total_sand = data.reduce((acc, curr) => {
          return acc + curr.total_sand;
        }, 0);
        const total_cement = data.reduce((acc, curr) => {
          return acc + curr.total_cement;
        }, 0);
        const total_concrete = data.reduce((acc, curr) => {
          return acc + curr.total_concrete;
        }, 0);
        const total_steel = data.reduce((acc, curr) => {
          return acc + curr.total_steel;
        }, 0);
        setData({total_bricks, total_sand, total_cement, total_concrete, total_steel})
      } else {
        console.error("Server error:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTotalMaterial()
  }, [])





  const { name } = useParams()
  const project = {
    name: name,
    bricks: Data.total_bricks,
    sand: Data.total_sand,
    cement: Data.total_cement,
    steel: Data.total_steel,
    concrete: Data.total_concrete,
  }
  return (
    <div className="m-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden  mx-auto pt-5">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-4 px-6">
          <h2 className="text-white text-2xl font-bold mb-2">{project.name}</h2>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 font-semibold text-lg mb-2">Project Details:</p>
          <div className="mt-2 flex flex-wrap">
            <div className="w-full">
              <p className="text-gray-600 text-lg py-1"><i className="far fa-id-card mr-2"></i>{`Bricks: ${project.bricks}`}</p>
              <p className="text-gray-600 text-lg py-1"><i className="far fa-calendar-alt mr-2"></i>{`Sand: ${project.sand}`}</p>
              <p className="text-gray-600 text-lg py-1"><i className="far fa-calendar-alt mr-2"></i>{`Cement: ${project.cement}`}</p>
              <p className="text-gray-600 text-lg py-1"><i className="fas fa-money-bill-wave mr-2"></i>{`Steel: ${project.steel}`}</p>
              <p className="text-gray-600 text-lg py-1"><i className="fas fa-money-bill-wave mr-2"></i>{`Concrete: ${project.concrete}`}</p>

            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default ProjectDetailsCard;