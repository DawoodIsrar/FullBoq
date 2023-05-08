import React from 'react'
import SideBar from '../../layout/SideBar';
import { Routes, Route } from "react-router-dom";
import AdminDashBoard from '../../pages/AdminDashBoard';
import Navbar from '../../layout/Navbar';
import Projects from '../../pages/Projects';
import AddProject from '../../pages/AddProject';
import ProjectDetailsCard from '../../pages/ProjectDetail';
import Profile from '../../pages/Profile';
import Setting from '../../pages/Setting';
import UpdatePassword from '../../pages/UpdatePassword';
import UpdateProfile from '../../pages/UpdateProfile';
import MaterailDatabase from '../../pages/MaterailDatabase ';

function SideBarRoutes() {



  return (
    <>
      <SideBar>
        <Navbar />
        <Routes>
        {/* <Route path="*" element={<AdminDashBoard />} /> */}
          <Route path="/" element={<AdminDashBoard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="projects/projectDetail/:name/:id" element={<ProjectDetailsCard />} />
          <Route path="/projectDetail/:name/:id" element={<ProjectDetailsCard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/setting/updateProfile" element={<UpdateProfile />} />
          <Route path="/setting/updatePassword" element={<UpdatePassword />} />
          <Route path="/materialDatabase/:id" element={<MaterailDatabase />} />
          <Route path="projects/materialDatabase/:id" element={<MaterailDatabase />} />

        </Routes>
      </SideBar>
    </>
  )
}
export default SideBarRoutes