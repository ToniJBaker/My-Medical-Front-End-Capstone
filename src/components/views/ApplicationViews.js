import { Route, Routes } from "react-router-dom"
import { AppointmentUpdate } from "../appointments/AppointmentUpdate"
import { SideNavigation } from "../nav/SideNavigation"
import { PhysicianForm } from "../physicians/PhysicianForm"
import { PhysiciansList } from "../physicians/PhysiciansList"
import { PrescriptionList } from "../prescriptions/PrescriptionList"
import { Home } from "./Home"



export const ApplicationViews = () => {
    return (
    <>
        <Routes>
            <Route path="/" element={<h2 className="welcome">Welcome to My Medical Storage</h2>} />
        </Routes>
        <SideNavigation/>
        <Routes>
            <Route path="/physicians" element={ <PhysiciansList/> }/>
            <Route path="/prescriptions" element={ <PrescriptionList/> }/>
            <Route path="/physicianForm" element={ <PhysicianForm/> }/>
            <Route path="/" element={<Home />} />
            <Route path="/appointments/edit/:appointmentId" element={< AppointmentUpdate />} />



        </Routes>
    </>
    )
}