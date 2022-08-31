import { SideNavigation } from "../nav/SideNavigation"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"

export const PrescriptionEdit = () => {
    const [prescription, setPrescription] = useState({
        userId:0,
        physicianId:0,
        name:"",
        dosage:""
    })
    const {prescriptionId} = useParams()

    
    const updatePrescription = (evt) => {
        const copy = {...prescription}
        copy[evt.target.id] = evt.target.value
        setPrescription(copy)
    }
    
    
    return (
    <>
        <h2 className="welcome">Prescriptions</h2>
        <SideNavigation/>
        <Link to="/prescriptions" className="btn btn-primary">Back</Link>
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Prescription Name</label>
            <input onChange={updatePrescription} type="text" className="form-control" id="name"/>
        </div>
        <div className="col-md-6">
            <label htmlFor="dosage" className="form-label">Dosage</label>
            <input onChange={updatePrescription} type="text" className="form-control" id="dosage"/>
        </div>
    
    </>
    )
}