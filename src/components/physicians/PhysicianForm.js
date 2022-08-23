import { SideNavigation } from "../nav/SideNavigation"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchPhysicians, postOption } from "../ApiManager"


    //function with form to POST a new Physician for the user
    export const PhysicianForm = () => {
        
        const navigate = useNavigate()
        
        const localMedicalUser = localStorage.getItem("myMedical_user")
        const medicalUserObject = JSON.parse(localMedicalUser)

        const [newPhysician, setNewPhysician] = useState({  //initial state
            userId: 0,
            name: "",
            phone: "",
            address: "",
            specialty: ""
        })
            
        const handleSaveNewPhysician = (event) => {
            event.preventDefault()
            const physicianToSentToAPI = {
                userId: medicalUserObject.id,
                name: newPhysician.name,
                phone: newPhysician.phone,
                address: newPhysician.address,
                specialty: newPhysician.specialty 
            }
            return (
                fetchPhysicians("", postOption(physicianToSentToAPI)) //fetch call to POST new physician to database.json
                .then(()=>{
                    navigate("/physicians")
                })
            )
        }
        const savePhysician = (evt) => {
            const copy = {...newPhysician}
            copy[evt.target.id] = evt.target.value
            setNewPhysician(copy)
        }
        
    
    return (
    <>
        <h2 className="welcome">Add New Physician</h2>
        <SideNavigation/>

        <form className="row g-3" onSubmit={handleSaveNewPhysician} >
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input onChange={savePhysician} type="text" className="form-control" id="name"/>
        </div>
        <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input onChange={savePhysician} type="text" className="form-control" id="phone"/>
        </div>
        <div className="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input onChange={savePhysician} type="text" className="form-control" id="address" placeholder="ex. 1234 Main St"/>
        </div>
        {/* <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" placeholder=""/>
        </div>
        <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip"/>
        </div> */}
        <div className="col-md-6">
            <label htmlFor="specialty" className="form-label">Specialty</label>
            <input onChange={savePhysician} type="text" className="form-control" id="specialty"/>
        </div>
            <div className="col-12">
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Save</button>
        </div>
    </form>
    
    </>
    )
}