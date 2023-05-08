import './App.css'
import GuestRoutes from './Routes/Guest/GuestRoutes'
import AdminRoutes from "./Routes/AdminRoutes/AdminRoutes"
import { useEffect, useState } from 'react';

function App() {
    const [token, setToken] = useState();
    const [id, setId] = useState();


    useEffect(() => {
      const tokenFromStorage = window.sessionStorage.getItem("access-token");
      const idFromStorage = window.sessionStorage.getItem("id");
      setId(idFromStorage);
      setToken(tokenFromStorage);
    }, []);
    
    if(token){
      return <AdminRoutes/>
    }
    else if(!token)
    return (
         <GuestRoutes/> 
    );
  }



export default App
