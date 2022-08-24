import React from "react"
import { Route, Routes } from "react-router-dom"
import "./MyMedical.css"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { NavBar } from "./components/nav/NavBar"
import { Authorized } from "./components/views/Authorized"
import { ApplicationViews } from "./components/views/ApplicationViews"




export const MyMedical =() => {
  return (
  
  
  <Routes>
		  <Route path="/login" element={<Login />} />
		  <Route path="/register" element={<Register />} />
		  

		  



		  <Route path="*" element={
        <Authorized>
            <NavBar />
            <ApplicationViews />
                  
        </Authorized>
		} />
    
	</Routes>
 
 
 );
}


