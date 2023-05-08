import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addProjectSchema } from "../schemas/addProjectSchema";

function AddProject() {
  const [openTab, setOpenTab] = useState(1);

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const [initialValues, setInitialValues] = useState({
    name: "",
    area: "",
    no_of_roofs: "",
    rooms: "",
    avg_room_size: "",
    attach_bath: true,
    attach_bath_size: 10 * 3,
    kitchen: true,
    kitchen_size: 10 * 15,
    ratio: "m15",
    u_id: parseInt(`${window.sessionStorage.getItem("id")}`)
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Check file size
      if (selectedFile.size > 1024 * 1024) {
        setError("File size exceeds 1 MB");
      } else {
        // Check file extension
        const fileNameParts = selectedFile.name.split(".");
        const fileExtension =
          fileNameParts[fileNameParts.length - 1].toLowerCase();
        if (fileExtension !== "pdf") {
          setError("Only PDF files are allowed");
        } else {
          setFile(selectedFile);
          setError(null);
        }
      }
    } else {
      setFile(null);
      setError(null);
    }
  };
  // const { values, errors, handleChange, touched, handleBlur } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: addProjectSchema,
  //   onSubmit: () => {
  //     console.log("Clicked");
  //     register(values);
  //   },
  // });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    setInitialValues({
      ...initialValues,
      [name]: name === "area" ? Number(value) :
        name === "attach_bath" || name === "kitchen" ? value === "true" :
          value
    });
  };

  // const register = async (e) => {
  //   e.preventDefault();

  // };
  console.log(initialValues);
  const handleSubmit = async (e) => {
    // console.log("Submitting form", values);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/materials", initialValues, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${window.sessionStorage.getItem("access-token")}`,
        },
      });
      if (response.status === 201) {
        setInitialValues({
          name: "",
          area: "",
          no_of_roofs: "",
          rooms: "",
          avg_room_size: "",
          attach_bath: true,
          attach_bath_size: 10 * 3,
          kitchen: true,
          kitchen_size: 10 * 15,
          ratio: "m15",
          u_id: parseInt(`${window.sessionStorage.getItem("id")}`)
        })
        const data = response.data;
        console.log("Response data:", data);
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
            <h1 className="text-lg font-medium py-5">Add Details</h1>
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
                      Estimate through Area
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
                      Estimate through File
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <form className=" mx-auto my-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="projectName"
                            >
                              Project Name
                            </label>
                            <input
                              className="form-select block w-full mt-1 border-2 p-2  text-gray-700"
                              id="name"
                              name="name"
                              type="text"
                              onChange={handleInputChange}
                              value={initialValues.name}
                              placeholder="Enter project name"
                              required
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="projectName"
                            >
                              Total Area in ft
                            </label>
                            <input
                              className="form-select block w-full mt-1 border-2 p-2 text-gray-700"
                              id="area"
                              name="area"
                              type="number"
                              onChange={handleInputChange}
                              value={initialValues.area}
                              placeholder="Enter Area in ft"
                              required
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="no_of_roofs"
                            >
                              No of Roofs
                            </label>
                            <input
                              className="form-select block w-full mt-1 border-2 p-2 text-gray-700"
                              id="no_of_roofs"
                              name="no_of_roofs"
                              type="number"
                              onChange={handleInputChange}
                              value={initialValues.no_of_roofs}
                              placeholder="Enter Roof No"
                              required
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="rooms"
                            >
                              No of Rooms
                            </label>
                            <input
                              className="form-select block w-full mt-1 border-2 p-2 text-gray-700"
                              id="rooms"
                              name="rooms"
                              type="number"
                              onChange={handleInputChange}
                              value={initialValues.rooms}
                              placeholder="Enter Rooms No"
                              required
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="avg_room_size"
                            >
                              Size of Room
                            </label>
                            <input
                              className="form-select block w-full mt-1 border-2 p-2 text-gray-700"
                              id="avg_room_size"
                              name="avg_room_size"
                              type="number"
                              onChange={handleInputChange}
                              value={initialValues.avg_room_size}
                              placeholder="Enter Rooms size"
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="bathroom"
                            >
                              Bathroom
                            </label>
                            <select
                              className="form-select block w-full mt-1 border-2 p-2"
                              id="attach_bath"
                              name="attach_bath"
                              onChange={handleInputChange}
                              value={initialValues.attach_bath}
                            >
                              <option value={true}>Yes</option>
                              <option value={false}>No</option>
                            </select>
                          </div>


                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="select-bathroom-size"
                            >
                              Bathroom Size
                            </label>
                            <select
                              className="form-select block w-full mt-1 border-2 p-2"
                              id="select-bathroom-size"
                              type="number"
                              name="attach_bath_size"
                              onChange={handleInputChange}
                              value={initialValues.attach_bath_size}
                            // required // add required attribute
                            >
                              <option value={10 * 3}>10*3</option>
                              <option value={10 * 20}>10*4</option>
                            </select>
                          </div>

                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="select-kitchen"
                            >
                              Kitchen
                            </label>
                            <select
                              className="form-select block w-full mt-1 border-2 p-2"
                              id="kitchen"
                              name="kitchen"
                              onChange={handleInputChange}
                              value={initialValues.kitchen}
                            >
                              <option value={true}>Yes</option>
                              <option value={false}>No</option>
                            </select>
                          </div>


                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="select-kitchen-size"
                            >
                              Kitchen Size
                            </label>
                            <select
                              className="form-select block w-full mt-1 border-2 p-2"
                              id="kitchen_size"
                              type="number"
                              name="kitchen_size"
                              onChange={handleInputChange}
                              value={initialValues.kitchen_size}
                            >
                              <option value={10 * 15}>10*15</option>
                              <option value={10 * 20}>10*20</option>
                            </select>
                          </div>


                          <div className="mb-4">
                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="select-kitchen-size"
                            >
                              Ratio
                            </label>
                            <select
                              className="form-select block w-full mt-1 border-2 p-2"
                              id="ratio"
                              name="ratio"
                              onChange={handleInputChange}
                              value={initialValues.ratio}
                            >
                              <option value="M15">M15</option>
                              <option value="M20">M20</option>
                            </select>
                          </div>
                        </div>

                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pt-3"
                          type="submit"
                        >
                          Add Project
                        </button>
                      </form>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div className="flex items-center justify-center pt-2">
                        <label className="relative cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-medium">
                          <span>Upload File</span>
                          <input
                            className="hidden"
                            type="file"
                            id="file-input"
                            accept="application/pdf"
                            onChange={handleFileChange}
                          />
                        </label>
                        <div className="pl-2">
                          {error && (
                            <div className="error text-red-600">{error}</div>
                          )}
                          {file && <div>Selected file: {file.name}</div>}
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

export default AddProject;
