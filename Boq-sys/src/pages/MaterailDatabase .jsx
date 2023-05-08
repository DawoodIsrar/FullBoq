import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function MaterailDatabase() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [Data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [Form, setForm] = useState({})
  const getTotalMaterial = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:8000/getTotalMaterial/${id} `, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${window.sessionStorage.getItem("access-token")}`,
        },
      });
      if (response.status === 200) {
        const data = response.data;
        const MyData = data.map(data => {
          return {
            p_id: data.p_id,
            area: data.area,
            roof_no: data.roof_no,
            rooms: data.rooms,
            avg_room_size: data.avg_room_size,
            attach_bath: data.attach_bath,
            attach_bath_size: data.attach_bath_size,
            kitchen: data.kitchen,
            kitchen_size: data.kitchen_size,
            ratio: '',
          };
        });
        setData(MyData);
        setForm(MyData)
        setLoading(false);
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

  const [openTab, setOpenTab] = useState(1);

  // handle form input field change
  const handleChange = (event, index) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newFormData = [...Form];

    newFormData[index] = {
      ...newFormData[index], [name]:
        name === "attach_bath" || name === "kitchen" ? value === "true" :
        name === 'ratio'? value:
          Number(value)
    };

    setForm(newFormData);
  };

  // handle form submission
  const handleSubmit = async (e, data) => {
    e.preventDefault();
    console.log(data)
    try {
      const response = await axios.patch("http://localhost:8000/updateMaterials", data, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${window.sessionStorage.getItem("access-token")}`,
        },
      });
      if (response.status === 200) {
        navigate('/')
      } else {
        console.error("Server error:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <div className="m-8">
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto p-5">
            <h1 className="text-lg font-medium py-5">Material Database</h1>
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                          ? "text-white bg-blue-600"
                          : "text-black bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      Set Material Database
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "text-white bg-blue-600"
                          : "text-black bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Update Material Database
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div className="flex flex-col bg-white rounded-lg border-2 shadow-lg p-5">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                              <div>
                                <form
                                  className="mx-auto my-8 mb-5"
                                >
                                  {
                                    !isLoading && Data.map((data, index) => (
                                      <div key={index}>
                                        <div className="pb-5 pt-5"><h1 className="text-gray-700 font-bold mb-2 text-lg ">Roof {index + 1}</h1></div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
                                          <div className="mb-4">
                                            <label
                                              className="block text-gray-700 font-bold mb-2"
                                              htmlFor="select-kitchen-size"
                                              >
                                              Ratio
                                            </label>
                                            <select
                                              className="form-select block w-full mt-1 border-2 p-2"
                                              name="ratio"
                                              value={Form[index].ratio}
                                              onChange={(e) => handleChange(e, index)}
                                              required
                                            >
                                              <option hidden defaultValue>Select Ration</option>
                                              <option value={'m5'}>M5</option>
                                              <option value={'m10'}>M10</option>
                                              <option value={'m15'}>M15</option>
                                              <option value={'m20'}>M20</option>
                                              <option value={'m25'}>M25</option>
                                            </select>
                                          </div>
                                          <div className="mb-4">
                                            <label
                                              className="block text-gray-700 font-bold mb-2"
                                              htmlFor="project-name"
                                            >
                                              Total area in ft:
                                            </label>
                                            <input
                                              className="form-input block w-full mt-1 border-2 p-2"
                                              name="area"
                                              type="text"
                                              value={Form[index].area}
                                              onChange={(e) => handleChange(e, index)}
                                            />
                                          </div>
        
                                          {/* No of Rooms */}
                                          <div className="mb-4">
                                            <label
                                              className="block text-gray-700 font-bold mb-2"
                                              htmlFor="project-name"
                                            >
                                              No of Rooms:
                                            </label>
                                            <input
                                              className="form-input block w-full mt-1 border-2 p-2"
                                              name="rooms"
                                              type="number"
                                              value={Form[index].rooms}
                                              onChange={(e) => handleChange(e, index)}
                                            />
                                          </div>
                                          {/* ------Size of Rooms----- */}
                                          <div className="mb-4 ">
                                            <label
                                              className="block text-gray-700 font-bold mb-2"
                                              htmlFor="select-option"
                                            >
                                              Size of Room
                                            </label>
                                            <select
                                              className="form-select block w-full mt-1 border-2 p-2"
                                              name="avg_room_size"
                                              value={Form[index].avg_room_size}
                                              onChange={(e) => handleChange(e, index)}
                                            >
                                              <option value={10 * 20}>10*20</option>
                                              <option value={15 * 20}>15*20</option>
                                              <option value={20 * 25}>20*25</option>
                                            </select>
                                          </div>
                                          {/* Attach Bath */}
                                          <div className="mb-4 ">
                                            <label
                                              className="block text-gray-700 font-bold mb-2"
                                              htmlFor="select-option"
                                            >
                                              Attach Bath
                                            </label>
                                            <select
                                              className="form-select block w-full mt-1 border-2 p-2"
                                              name="attach_bath"
                                              value={Form[index].attach_bath}
                                              onChange={(e) => handleChange(e, index)}
                                            >
                                              <option value={true}>Yes</option>
                                              <option value={false}>No</option>
                                            </select>
                                          </div>
                                          {/* ------Size of Bathroom----- */}
                                          <div className="mb-4 ">
                                            <label
                                              className="block text-gray-700 font-bold mb-2"
                                              htmlFor="select-option"
                                            >
                                              Size of Bathroom
                                            </label>
                                            <select
                                              className="form-select block w-full mt-1 border-2 p-2"
                                              name="attach_bath_size"
                                              value={Form[index].attach_bath_size}
                                              onChange={(e) => handleChange(e, index)}
                                            >
                                              <option value={4 * 3}>4*3</option>
                                              <option value={4 * 5}>4*5</option>
                                              <option value={4 * 6}>4*6</option>
                                            </select>
                                          </div>

                                          {/* Kitchen */}
                                          <div className="mb-4 ">
                                            <label
                                              className="block text-gray-700 font-bold mb-2"
                                              htmlFor="select-option"
                                            >
                                              Kitchen
                                            </label>
                                            <select
                                              className="form-select block w-full mt-1 border-2 p-2"
                                              name="kitchen"
                                              value={Form[index].kitchen}
                                              onChange={(e) => handleChange(e, index)}
                                            >
                                              <option value={true}>Yes</option>
                                              <option value={false}>No</option>
                                            </select>
                                          </div>
                                          {/* ------Size of Kitchen----- */}
                                          <div className="mb-4 ">
                                            <label
                                              className="block text-gray-700 font-bold mb-2"
                                              htmlFor="select-option"
                                            >
                                              Size of Kitchen
                                            </label>
                                            <select
                                              className="form-select block w-full mt-1 border-2 p-2"
                                              name="kitchen_size"
                                              value={Form[index].kitchen_size}
                                              onChange={(e) => handleChange(e, index)}
                                            >
                                              <option value={4 * 8}>4*8</option>
                                              <option value={4 * 10}>4*10</option>
                                              <option value={4 * 15}>4*15</option>
                                            </select>
                                          </div>
                                        </div>

                                        <div className="flex justify-center pt-5">
                                          <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={(e) => handleSubmit(e, Form[index])}
                                          >
                                            Update
                                          </button>
                                        </div>
                                      </div>
                                    ))
                                  }
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterailDatabase;
