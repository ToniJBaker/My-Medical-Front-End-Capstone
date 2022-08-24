import { SideNavigation } from "../nav/SideNavigation"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchPhysicians, fetchPrescriptions, postOption } from "../ApiManager"





export const PrescriptionForm = () => {
    const [newPrescription, setNewPrescription] = useState({
        userId:0,
        physicianId:0,
        name:"",
        dosage:""
    })
    const [physicians, setPhysicians] = useState([])
    const navigate = useNavigate()
    
    const localMedicalUser = localStorage.getItem("myMedical_user") //allows details and use of local user
    const medicalUserObject = JSON.parse(localMedicalUser)

    useEffect(
        ()=>{
            fetchPhysicians() //fetch call, filter physicians for local user
            .then((physiciansList) =>{
                const physiciansForUser = physiciansList.filter((physician)=> medicalUserObject.id === physician.userId )
                setPhysicians(physiciansForUser)})
        
            },
        []
    )
    
    const savePrescription = (evt) => {     //saves each property of the new object
        const copy = {...newPrescription}
        copy[evt.target.id] = evt.target.value
        setNewPrescription(copy)
    }
    
    
    const handleSaveNewPrescription = (event) => {  //handles the save
        event.preventDefault()
        const prescriptionToSentToAPI = {
            userId: medicalUserObject.id,
            // physicianId: physician.id,
            name: newPrescription.name,
            dosage: newPrescription.dosage
            
        }
        return (
            fetchPrescriptions("", postOption(prescriptionToSentToAPI)) //fetch call to POST new prescription to API
            .then(()=>{
                navigate("/prescriptions")
            })
        )
    }
    
    
    return (
    <>
    <h2 className="welcome">Add New Prescription</h2>
        <SideNavigation/>
        <form className="row g-3" onSubmit={handleSaveNewPrescription} >
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Prescription Name</label>
            <input onChange={savePrescription} type="text" className="form-control" id="name"/>
        </div>
        <div className="col-md-6">
            <label htmlFor="dosage" className="form-label">Dosage</label>
            <input onChange={savePrescription} type="text" className="form-control" id="dosage"/>
        </div>
        <div class="col-md-4">
            <label htmlFor="physician" class="form-label">Select Physician</label>
            <select value="physician.id" class="form-select" onChange={savePrescription}>
                <option value="0"> Select </option>
                {
                    physicians.map((physician)=>{
                        return `<option value="${physician.id}">${physician.name}</option>`
                    })
                }
            </select>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Save</button>
            <Link className="btn btn-primary" to="/prescriptions">Back</Link>

        </div>


        </form>
    
    </>
    )
}