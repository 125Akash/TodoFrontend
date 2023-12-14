import React, { useState } from "react";
import Register from "./components/registration/Register";
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/registration/Login";
import Dashboard from "./components/Dashboard";
import  {Toaster} from "react-hot-toast"





 

 
function App() {

   const [userData, setUserData] = useState()
  const getData = (data) => {
    setUserData(data)
  }
 

    const BASE_URL = "https://todobackend-4eqz.onrender.com";
      

  return (
    <BrowserRouter>
    <Toaster
    position="top-right"
    reverseOrder={true}
    />
    <Routes>
      <Route path="/" element = {<Login  BASE_URL={BASE_URL} AppData={getData} />}/>
      <Route path="/signup" element = {<Register  BASE_URL={BASE_URL} AppData={getData} />}/>
      <Route path="/dashboard" element = {<Dashboard userData={userData}/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App