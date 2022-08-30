import { Route, Routes } from "react-router-dom"
import { AppointmentUpdate } from "../appointments/AppointmentUpdate"
import { MedHistory } from "../medHistory/MedHistory"
import { SideNavigation } from "../nav/SideNavigation"
import { PhysicianEdit } from "../physicians/PhysicianEdit"
import { PhysicianForm } from "../physicians/PhysicianForm"
import { PhysiciansList } from "../physicians/PhysiciansList"
import { PrescriptionForm } from "../prescriptions/PrescriptionForm"
import { PrescriptionList } from "../prescriptions/PrescriptionList"
import { Home } from "./Home"
import { UpdateProfile } from "./UpdateProfile"



export const ApplicationViews = () => {
    return (
    <>
        <Routes>
            <Route path="/" element={<h2 className="welcome">Welcome to My Medical Storage</h2>} />
        </Routes>
        <SideNavigation/>
        <Routes>
            <Route path="/updateProfile" element={< UpdateProfile /> } />
            <Route path="/medicalHistory" element={ <MedHistory/> }/>
            <Route path="/physicians" element={ <PhysiciansList/> }/>
            <Route path="/prescriptions" element={ <PrescriptionList/> }/>
            <Route path="/physicianForm" element={ <PhysicianForm/> }/>
            <Route path="/physician/edit/:physicianId" element={ <PhysicianEdit/> }/>
            <Route path="/prescriptionForm" element={ <PrescriptionForm/> }/>
            <Route path="/" element={<Home />} />
            <Route path="/appointments/edit/:appointmentId" element={< AppointmentUpdate />} />



        </Routes>
    </>
    )
}