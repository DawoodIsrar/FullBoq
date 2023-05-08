import {Routes,Route} from "react-router-dom"
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ForgetPassword from "../../pages/ForgetPassword";

  

function GuestRoutes() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />

          

        </Routes>
    </>
  )
}

export default GuestRoutes