import { SideNavigation } from "../nav/SideNavigation"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchPrescriptions, putOption } from "../ApiManager"

export const PrescriptionEdit = () => {
    const [prescription, setPrescription] = useState({
        userId:0,
        physicianId:0,
        name:"",
        dosage:""
    })
    const navigate = useNavigate()
    const {prescriptionId} = useParams() //useParams to identify the single prescription to edit
    
    useEffect (//fetch call for initial state
        ()=>{
            fetchPrescriptions(`/${prescriptionId}`)
            .then((prescriptionToEdit)=>{
                setPrescription(prescriptionToEdit)
            })
        },[]
    )

    //function to submit/update all the changes to the prescription
    const handleUpdatePrescription = (event)=>{
        event.preventDefault()
        fetchPrescriptions(`/${prescriptionId}`, putOption(prescription))
        .then(()=>{
            navigate("/prescriptions")
        })
    }


    //function to save the updated property of the prescription
    const updatePrescription = (evt) => {
        const copy = {...prescription}
        copy[evt.target.id] = evt.target.value
        setPrescription(copy)
    }
    
    
    return (
    <form onSubmit={handleUpdatePrescription}>
        <h2 className="welcome">Prescriptions</h2>
        <SideNavigation/>
        <Link to="/prescriptions" className="btn btn-primary">Back</Link>
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Prescription Name</label>
            <input value={prescription.name} onChange={updatePrescription} type="text" className="form-control" id="name"/>
        </div>
        <div className="col-md-6">
            <label htmlFor="dosage" className="form-label">Dosage</label>
            <input value={prescription.dosage} onChange={updatePrescription} type="text" className="form-control" id="dosage"/>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Update</button>
        </div>
    
    </form>
    )
}